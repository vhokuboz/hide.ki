import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ slug, title, desc, tags, date }: PostMeta) {
  return (
    <article className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-5 transition-all duration-300 hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-surface)]/60 hover:-translate-y-0.5">
      <Link href={`/blog/${slug}`} className="absolute inset-0 z-10 rounded-2xl">
        <span className="sr-only">{title}</span>
      </Link>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag}`}
              className="relative z-20 rounded-full border border-[var(--color-border)] px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase transition-colors hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
            >
              {tag}
            </Link>
          ))}
        </div>
        <h3 className="font-semibold leading-snug text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">{desc}</p>
        <time className="font-mono text-[11px] tracking-wide text-[var(--color-muted)]">
          {date}
        </time>
      </div>
    </article>
  );
}
