import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";

export default function PostLoading() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-32">
        <div className="mb-8 h-4 w-20 animate-pulse rounded bg-[#1e1e2a]" />
        <article>
          <header className="mb-10">
            <div className="mb-4 flex gap-2">
              <div className="h-5 w-16 animate-pulse rounded-full bg-[#1e1e2a]" />
              <div className="h-5 w-20 animate-pulse rounded-full bg-[#1e1e2a]" />
            </div>
            <div className="mb-3 h-8 w-3/4 animate-pulse rounded bg-[#1e1e2a]" />
            <div className="h-4 w-32 animate-pulse rounded bg-[#1e1e2a]" />
          </header>
          <div className="flex flex-col gap-3">
            <div className="h-4 w-full animate-pulse rounded bg-[#1e1e2a]" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-[#1e1e2a]" />
            <div className="h-4 w-4/6 animate-pulse rounded bg-[#1e1e2a]" />
            <div className="mt-4 h-4 w-full animate-pulse rounded bg-[#1e1e2a]" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-[#1e1e2a]" />
          </div>
        </article>
      </main>
    </>
  );
}
