import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";

export default function TagLoading() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-32">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-5 w-24 animate-pulse rounded bg-[#1e1e2a]" />
          <div className="mx-auto mb-2 h-4 w-12 animate-pulse rounded bg-[#1e1e2a]" />
          <div className="mx-auto h-8 w-48 animate-pulse rounded bg-[#1e1e2a]" />
          <div className="mx-auto mt-2 h-3 w-16 animate-pulse rounded bg-[#1e1e2a]" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-2xl border border-[#1e1e2a] bg-[#12121a]/30 p-5"
            >
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="h-5 w-16 rounded-full bg-[#1e1e2a]" />
                </div>
                <div className="h-5 w-3/4 rounded bg-[#1e1e2a]" />
                <div className="h-4 w-full rounded bg-[#1e1e2a]" />
                <div className="h-3 w-24 rounded bg-[#1e1e2a]" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
