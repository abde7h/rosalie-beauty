export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Anuncios"
      className="w-full bg-[#0D0D0B] text-white"
    >
      <div className="mx-auto flex h-9 max-w-screen-2xl items-center justify-center px-4 sm:px-6">
        <p
          className="text-[10px] font-light uppercase text-white/85"
          style={{
            letterSpacing: "0.22em",
            fontFamily: "var(--font-sans)",
          }}
        >
          <span className="hidden sm:inline">
            ENVÍO GRATIS en pedidos superiores a 65€
          </span>
          <span className="sm:hidden">ENVÍO GRATIS +65€</span>
          <span className="mx-3 text-white/40">—</span>
          <a
            href="#productos"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            Comprar
            <span className="shimmer-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
