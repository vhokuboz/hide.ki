export default function Comments() {
  const appId = process.env.NEXT_PUBLIC_CUSDIS_APP_ID;
  const host = process.env.NEXT_PUBLIC_CUSDIS_HOST || "https://cusdis.com";

  if (!appId) return null;

  return (
    <section className="mt-16 border-t border-[var(--color-border)] pt-10">
      <h2 className="mb-8 font-mono text-sm tracking-widest text-[var(--color-muted)] uppercase">
        comentários
      </h2>
      <div
        data-host={host}
        data-app-id={appId}
        id="cusdis_thread"
        className="cusdis-empty"
      />
      <script
        defer
        src={`${host}/js/cusdis.es.js`}
      />
    </section>
  );
}
