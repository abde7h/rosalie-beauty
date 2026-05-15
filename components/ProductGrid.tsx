import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section
      id="productos"
      aria-labelledby="productos-titulo"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-16 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="mb-4 text-[10px] uppercase text-mid-gray"
              style={{ letterSpacing: "0.3em" }}
            >
              La colección
            </p>
            <h2
              id="productos-titulo"
              className="text-charcoal"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.05,
                letterSpacing: "0.005em",
              }}
            >
              Ritual esencial de cuerpo
            </h2>
          </div>

          <p className="max-w-sm text-[13px] font-light leading-relaxed text-charcoal/65">
            Tres fórmulas pensadas para acompañar tu rutina diaria. Texturas
            limpias, ingredientes botánicos y un acabado sensorial inconfundible.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
