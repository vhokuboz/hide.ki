import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsPage } from "@/lib/posts";
import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";

export const revalidate = 3600;

export async function generateStaticParams() {
  const { totalPages } = getPostsPage(1);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageStr } = await params;
  const page = Number(pageStr);
  if (!Number.isInteger(page) || page < 1) notFound();

  const result = getPostsPage(page);
  if (result.posts.length === 0) notFound();

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
            {page === 1 ? "todos os posts" : `página ${page}`}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {result.posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
        {result.totalPages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-2 font-mono text-sm" aria-label="paginação">
            {page > 1 ? (
              <Link
                href={page === 2 ? "/blog" : `/blog/page/${page - 1}`}
                className="rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
              >
                ← anterior
              </Link>
            ) : (
              <span className="px-3 py-1.5 text-[var(--color-muted)]" />
            )}
            <div className="flex items-center gap-1">
              {Array.from({ length: result.totalPages }, (_, i) => i + 1).map(
                (p) => (
                  <Link
                    key={p}
                    href={p === 1 ? "/blog" : `/blog/page/${p}`}
                    className={`rounded-lg border px-3 py-1.5 transition-colors ${
                      p === page
                        ? "border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {p}
                  </Link>
                ),
              )}
            </div>
            {page < result.totalPages ? (
              <Link
                href={`/blog/page/${page + 1}`}
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
