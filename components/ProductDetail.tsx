"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ProductImage } from "./ProductImage";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ProductDetailProps {
  product: Product;
}

type AccordionKey = "descripcion" | "ingredientes" | "uso";

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem, openCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [openSection, setOpenSection] = useState<AccordionKey | null>(null);

  useEffect(() => {
    setOpenSection("descripcion");
  }, []);

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 900);
    window.setTimeout(() => openCart(), 320);
  };

  const toggle = (key: AccordionKey) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const ingredients = product.ingredients
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <article className="w-full bg-white">
      <nav
        aria-label="Migas de pan"
        className="mx-auto max-w-screen-2xl px-6 pb-6 pt-6 sm:px-10"
      >
        <ol
          className="flex flex-wrap items-center gap-2 text-[10px] uppercase text-mid-gray"
          style={{ letterSpacing: "0.22em" }}
        >
          <li>
            <Link href="/" className="transition-colors hover:text-charcoal">
              Inicio
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/#productos"
              className="transition-colors hover:text-charcoal"
            >
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-charcoal/85">{product.name}</li>
        </ol>
      </nav>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-10 px-6 pb-24 sm:px-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:pb-32">
        <div className="relative">
          <div className="sticky top-28 aspect-[4/5] w-full overflow-hidden bg-off-white lg:aspect-auto lg:h-[78vh]">
            <ProductImage product={product} variant="detail" priority />

            {product.badge && (
              <div
                className="absolute right-5 top-5 inline-flex h-6 items-center bg-[#0D0D0B] px-3 text-[10px] uppercase text-white"
                style={{ letterSpacing: "0.22em" }}
              >
                {product.badge}
              </div>
            )}
            <div
              className="absolute left-5 top-5 text-[10px] uppercase text-charcoal/70"
              style={{ letterSpacing: "0.3em" }}
            >
              {product.category}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1
            className="text-charcoal"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "0.005em",
            }}
          >
            {product.name}
          </h1>

          <p className="mt-3 text-[14px] font-light text-mid-gray">
            {product.subtitle}
          </p>

          <hr className="my-6 border-light-gray" />

          <div className="flex items-baseline gap-4">
            <span
              className="text-charcoal"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "22px",
                fontWeight: 400,
              }}
            >
              {formatPrice(product.price)}
            </span>
            <span
              className="text-[11px] uppercase text-mid-gray"
              style={{ letterSpacing: "0.22em" }}
            >
              {product.size}
            </span>
          </div>

          <p className="mt-6 text-[14px] font-light leading-relaxed text-charcoal/75">
            {product.description}
          </p>

          <div className="mt-7">
            <p
              className="mb-3 text-[10px] uppercase text-mid-gray"
              style={{ letterSpacing: "0.3em" }}
            >
              Ingredientes clave
            </p>
            <div className="flex flex-wrap gap-2">
              {ingredients.map((ing) => (
                <span
                  key={ing}
                  className="inline-flex items-center rounded-full border border-light-gray bg-off-white px-3.5 py-1.5 text-[11px] font-light text-charcoal/80"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 flex items-center gap-6">
            <div className="inline-flex items-center gap-4">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Disminuir cantidad"
                className="inline-flex h-8 w-8 items-center justify-center text-mid-gray transition-colors hover:text-charcoal"
              >
                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" aria-hidden="true">
                  <path d="M0 1H12" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
              <span
                aria-live="polite"
                className="min-w-[20px] text-center text-[15px]"
                style={{ fontWeight: 400 }}
              >
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Aumentar cantidad"
                className="inline-flex h-8 w-8 items-center justify-center text-mid-gray transition-colors hover:text-charcoal"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M6 0V12M0 6H12"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </button>
            </div>
            <span className="h-6 w-px bg-light-gray" aria-hidden="true" />
            <span
              className="text-[11px] uppercase text-mid-gray"
              style={{ letterSpacing: "0.22em" }}
            >
              En stock · Listo para enviar
            </span>
          </div>

          <motion.button
            type="button"
            onClick={handleAdd}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
            className="relative mt-6 flex h-[52px] w-full items-center justify-center overflow-hidden bg-[#0D0D0B] text-[11px] uppercase text-white transition-colors hover:bg-accent"
            style={{ letterSpacing: "0.25em", fontWeight: 500 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="added"
                  initial={{ y: 22, opacity: 0, scale: 0.96 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.34, ease: EASE }}
                  className="inline-flex items-center gap-2"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M1 6L4.5 9.5L11 2"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  Añadido al carrito
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.34, ease: EASE }}
                >
                  Añadir al carrito · {formatPrice(product.price * qty)}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] uppercase text-mid-gray">
            <li
              className="inline-flex items-center gap-1.5"
              style={{ letterSpacing: "0.18em" }}
            >
              <ShieldIcon />
              Compra segura
            </li>
            <li
              className="inline-flex items-center gap-1.5"
              style={{ letterSpacing: "0.18em" }}
            >
              <TruckIcon />
              Envío gratis +65€
            </li>
            <li
              className="inline-flex items-center gap-1.5"
              style={{ letterSpacing: "0.18em" }}
            >
              <ReturnIcon />
              Devoluciones gratuitas
            </li>
          </ul>

          <div className="mt-10 divide-y divide-light-gray border-y border-light-gray">
            <AccordionRow
              label="Descripción"
              isOpen={openSection === "descripcion"}
              onToggle={() => toggle("descripcion")}
            >
              <p className="text-[13px] font-light leading-relaxed text-charcoal/75">
                {product.description}
              </p>
            </AccordionRow>

            <AccordionRow
              label="Ingredientes"
              isOpen={openSection === "ingredientes"}
              onToggle={() => toggle("ingredientes")}
            >
              <p className="text-[13px] font-light leading-relaxed text-charcoal/75">
                Fórmula limpia con activos botánicos certificados.
              </p>
              <ul
                className="mt-3 grid grid-cols-1 gap-2 text-[13px] font-light text-charcoal/75 sm:grid-cols-2"
              >
                {ingredients.map((ing) => (
                  <li key={ing} className="flex items-start gap-2">
                    <span
                      className="mt-2 inline-block h-px w-3 bg-charcoal/40"
                      aria-hidden="true"
                    />
                    {ing}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 space-y-2">
                {product.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[13px] font-light text-charcoal/75"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      aria-hidden="true"
                      className="mt-1 flex-shrink-0 text-accent"
                    >
                      <path
                        d="M1 5.5L4 8.5L10 1.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </AccordionRow>

            <AccordionRow
              label="Modo de uso"
              isOpen={openSection === "uso"}
              onToggle={() => toggle("uso")}
            >
              <p className="text-[13px] font-light leading-relaxed text-charcoal/75">
                {product.usage}
              </p>
            </AccordionRow>
          </div>
        </div>
      </div>
    </article>
  );
}

interface AccordionRowProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionRow({ label, isOpen, onToggle, children }: AccordionRowProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left text-charcoal transition-colors hover:text-accent"
      >
        <span
          className="text-[11px] uppercase"
          style={{ letterSpacing: "0.25em", fontWeight: 500 }}
        >
          {label}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          aria-hidden="true"
          className="inline-flex"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 0V12M0 6H12"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-6 pr-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
      <path
        d="M5.5 0.5L10 2V6.5C10 9.5 5.5 12 5.5 12C5.5 12 1 9.5 1 6.5V2L5.5 0.5Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true">
      <rect x="0.5" y="1.5" width="8" height="6" stroke="currentColor" strokeWidth="1" />
      <path
        d="M8.5 3.5H11.5L13 5.5V7.5H8.5V3.5Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="3" cy="9" r="1.2" stroke="currentColor" strokeWidth="1" />
      <circle cx="10.5" cy="9" r="1.2" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function ReturnIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M1 6.5C1 3.5 3.5 1 6.5 1C9.5 1 12 3.5 12 6.5C12 9.5 9.5 12 6.5 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M1 6.5L3 4.5M1 6.5L3 8.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
