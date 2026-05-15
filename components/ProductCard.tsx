"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ProductImage } from "./ProductImage";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 900);
    window.setTimeout(() => openCart(), 320);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        ease: EASE,
        delay: index * 0.08,
      }}
      className="group flex flex-col"
    >
      <Link
        href={`/products/${product.id}`}
        className="relative block aspect-square w-full overflow-hidden bg-off-white"
        aria-label={`Ver ${product.name}`}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="absolute inset-0"
        >
          <ProductImage
            product={product}
            variant="card"
            priority={index === 0}
          />
        </motion.div>

        <div
          className="absolute left-4 top-4 text-[9px] uppercase text-charcoal/70"
          style={{ letterSpacing: "0.25em" }}
        >
          {product.category}
        </div>

        {product.badge && (
          <div
            className="absolute right-4 top-4 inline-flex h-5 items-center bg-[#0D0D0B] px-2.5 text-[9px] font-medium uppercase text-white"
            style={{ letterSpacing: "0.18em" }}
          >
            {product.badge}
          </div>
        )}
      </Link>

      <div className="mt-6 flex flex-col">
        <Link
          href={`/products/${product.id}`}
          className="text-charcoal transition-colors hover:text-accent"
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "22px",
              lineHeight: 1.1,
              letterSpacing: "0.005em",
            }}
          >
            {product.name}
          </h3>
        </Link>

        <p className="mt-1.5 line-clamp-1 text-[13px] font-light text-mid-gray">
          {product.subtitle}
        </p>

        <div className="mt-3 flex items-baseline justify-between gap-3">
          <span className="text-[12px] font-light uppercase text-mid-gray">
            {product.size}
          </span>
          <span className="text-[16px] text-charcoal" style={{ fontWeight: 400 }}>
            {formatPrice(product.price)}
          </span>
        </div>

        <motion.button
          type="button"
          onClick={handleAdd}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.985 }}
          transition={{ duration: 0.2 }}
          className="relative mt-5 flex h-11 w-full items-center justify-center overflow-hidden bg-[#0D0D0B] text-[11px] uppercase text-white transition-colors hover:bg-accent"
          style={{ letterSpacing: "0.22em", fontWeight: 500 }}
          aria-label={`Añadir ${product.name} al carrito`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {added ? (
              <motion.span
                key="added"
                initial={{ y: 18, opacity: 0, scale: 0.96 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{
                  duration: 0.32,
                  ease: EASE,
                }}
                className="inline-flex items-center gap-2"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5.5L4 8.5L10 1.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                Añadido
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.32, ease: EASE }}
              >
                Añadir al carrito
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.article>
  );
}
