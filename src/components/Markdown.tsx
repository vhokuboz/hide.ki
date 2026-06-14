import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 mt-8 font-mono text-2xl font-bold text-[var(--color-foreground)] first:mt-0">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-3 mt-8 font-mono text-xl font-semibold text-[var(--color-foreground)] first:mt-0">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mb-2 mt-6 font-mono text-lg font-semibold text-[var(--color-foreground)] first:mt-0">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="mb-4 leading-relaxed text-[var(--color-muted)] last:mb-0">
            {children}
          </p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-[var(--color-primary)] underline decoration-[var(--color-primary)]/30 transition-colors hover:decoration-[var(--color-primary)]/80"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 flex flex-col gap-2 pl-5 last:mb-0">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 flex flex-col gap-2 pl-5 last:mb-0">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-[var(--color-muted)] marker:text-[var(--color-muted)]">{children}</li>
        ),
        code: ({ className, children }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-1.5 py-0.5 font-mono text-sm text-[var(--color-primary)]">
                {children}
              </code>
            );
          }
          return (
            <pre className="mb-4 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 last:mb-0">
              <code className="font-mono text-sm text-[var(--color-foreground)]">
                {children}
              </code>
            </pre>
          );
        },
        blockquote: ({ children }) => (
          <blockquote className="mb-4 border-l-2 border-[var(--color-primary)]/40 pl-4 italic text-[var(--color-muted)] last:mb-0">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="mb-4 border-[var(--color-border)] last:mb-0" />,
        strong: ({ children }) => (
          <strong className="font-semibold text-[var(--color-foreground)]">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-[var(--color-foreground)]">{children}</em>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
