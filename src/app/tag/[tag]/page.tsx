import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return (
    <>
      <CursorGlow />
      <Header />
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-32">
        <div className="mb-12 text-center">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center gap-2 font-mono text-sm tracking-wider text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            <span className="text-xs">←</span>
            todos os posts
          </Link>
          <h2 className="mt-4 font-mono text-sm tracking-widest text-[var(--color-muted)] uppercase">
            tag
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
            #{tag}
          </p>
          <p className="mt-1 font-mono text-xs text-[var(--color-muted)]">
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
