"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("light");
    }
    return false;
  });

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label={light ? "ativar modo escuro" : "ativar modo claro"}
      className="rounded-lg border border-[var(--color-border)] px-2 py-1 font-mono text-xs tracking-wider text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
    >
      {light ? "✦ escuro" : "☀︎ claro"}
    </button>
  );
}
