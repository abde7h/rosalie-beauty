import Image from "next/image";
import type { Product } from "@/types";

const SIZES: Record<"card" | "detail", string> = {
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  detail: "(max-width: 1024px) 100vw, 45vw",
};

interface ProductImageProps {
  product: Product;
  variant: "card" | "detail";
  className?: string;
  priority?: boolean;
}

export function ProductImage({
  product,
  variant,
  className = "",
  priority = false,
}: ProductImageProps) {
  return (
    <div
      className={`relative h-full w-full ${className}`}
      style={{ backgroundColor: product.bgColor }}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover object-center"
        sizes={SIZES[variant]}
        priority={priority}
      />
    </div>
  );
}
