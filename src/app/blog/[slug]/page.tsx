import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { Markdown } from "@/components/Markdown";
import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Comments from "@/components/Comments";

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — hide.ki`,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      url: `https://hide.ki/blog/${slug}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <CursorGlow />
      <Header />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-32">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm tracking-wider text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
        >
          <span className="text-xs">←</span>
          voltar
        </Link>
        <article>
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${tag}`}
                  className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase transition-colors hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
                >
                  {tag}
                </Link>
              ))}
            </div>
          <h1 className="font-mono text-3xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
            {post.title}
          </h1>
          <time className="mt-3 block font-mono text-[11px] tracking-wide text-[var(--color-muted)]">
            {post.date}
          </time>
        </header>
        <div className="prose-custom">
          <Markdown content={post.content} />
        </div>
      </article>
      <Comments />
    </main>
      <Footer />
    </>
  );
}
