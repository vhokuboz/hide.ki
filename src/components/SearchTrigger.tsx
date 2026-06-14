"use client";

export default function SearchTrigger() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("toggle-search"))}
      aria-label="buscar posts"
      className="rounded-lg border border-[var(--color-border)] px-2 py-1 font-mono text-xs tracking-wider text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
    >
      ⌕ <span className="hidden sm:inline">buscar</span>
      <kbd className="ml-1 rounded border border-[var(--color-border)] px-1 py-0.5 text-[10px]">
        ⌘K
      </kbd>
    </button>
  );
}
