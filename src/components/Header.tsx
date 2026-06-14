import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SearchTrigger from "@/components/SearchTrigger";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4" aria-label="navegação principal">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-widest text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary)]/80"
        >
          hide.ki
        </Link>
        <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
          {["home", "blog", "about"].map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `/${item}`}
              className="hidden transition-colors hover:text-[var(--color-foreground)] sm:inline"
            >
              {item}
            </Link>
          ))}
          <SearchTrigger />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
