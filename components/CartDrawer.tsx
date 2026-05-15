"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import type { CartItem } from "@/types";

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQty, total, isHydrated } =
    useCart();

  const handleCheckout = () => {
    window.alert("¡Próximamente! Pago no disponible en demo.");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar cesta"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black cursor-pointer"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Cesta de la compra"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[420px] flex-col bg-white shadow-[-20px_0_60px_-30px_rgba(0,0,0,0.18)]"
            style={{ width: "min(420px, 90vw)" }}
          >
            <div className="flex items-center justify-between border-b border-light-gray px-6 py-5">
              <h2
                className="text-charcoal"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "24px",
                  letterSpacing: "0.01em",
                }}
              >
                Tu cesta{" "}
                <span className="text-mid-gray">({items.length})</span>
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Cerrar cesta"
                className="-mr-2 inline-flex h-9 w-9 items-center justify-center text-charcoal transition-colors hover:text-accent"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L15 15M15 1L1 15"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </button>
            </div>

            {!isHydrated ? (
              <div className="flex flex-1 items-center justify-center px-6 text-[13px] text-mid-gray">
                Cargando…
              </div>
            ) : items.length === 0 ? (
              <EmptyCart onClose={closeCart} />
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6">
                  <ul className="divide-y divide-light-gray">
                    {items.map((item) => (
                      <CartLine
                        key={item.id}
                        item={item}
                        onRemove={() => removeItem(item.id)}
                        onQtyChange={(qty) => updateQty(item.id, qty)}
                      />
                    ))}
                  </ul>
                </div>

                <div className="border-t border-light-gray px-6 pb-6 pt-5">
                  <div className="flex items-center justify-between text-[13px] font-light text-charcoal/70">
                    <span>Envío</span>
                    <span>
                      {total >= 65 ? "Gratis" : "Calculado al pagar"}
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <span
                      className="text-[11px] uppercase text-charcoal"
                      style={{ letterSpacing: "0.25em" }}
                    >
                      Subtotal
                    </span>
                    <span
                      className="text-charcoal"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "20px",
                        fontWeight: 400,
                      }}
                    >
                      {formatPrice(total)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="mt-6 flex h-12 w-full items-center justify-center bg-[#0D0D0B] text-[11px] uppercase text-white transition-colors hover:bg-accent"
                    style={{ letterSpacing: "0.22em", fontWeight: 500 }}
                  >
                    Proceder al pago
                  </button>

                  <p className="mt-3 text-center text-[10px] uppercase text-mid-gray"
                     style={{ letterSpacing: "0.22em" }}>
                    Compra segura · Devoluciones gratuitas
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function EmptyCart({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-off-white">
        <svg
          width="22"
          height="24"
          viewBox="0 0 20 22"
          fill="none"
          aria-hidden="true"
          className="text-charcoal/60"
        >
          <path
            d="M3 7H17L15.5 19H4.5L3 7Z"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <path
            d="M7 7V5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5V7"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <p
        className="text-charcoal"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: "22px",
        }}
      >
        Tu cesta está vacía
      </p>
      <p className="mt-2 max-w-[260px] text-[13px] font-light leading-relaxed text-mid-gray">
        Descubre la colección y comienza tu ritual de cuidado.
      </p>

      <Link
        href="/#productos"
        onClick={onClose}
        className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase text-charcoal underline-offset-[6px] hover:underline hover:text-accent"
        style={{ letterSpacing: "0.22em" }}
      >
        Ver colección
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

interface CartLineProps {
  item: CartItem;
  onRemove: () => void;
  onQtyChange: (qty: number) => void;
}

function CartLine({ item, onRemove, onQtyChange }: CartLineProps) {
  return (
    <li className="flex gap-4 py-5">
      <div
        className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-off-white"
        style={{ backgroundColor: item.bgColor }}
        aria-hidden="true"
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-center"
            sizes="80px"
          />
        ) : (
          <div
            className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.7), rgba(0,0,0,0.15))",
            }}
          />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className="truncate text-charcoal"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "17px",
                lineHeight: 1.2,
              }}
            >
              {item.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-[12px] font-light text-mid-gray">
              {item.subtitle}
            </p>
            <p
              className="mt-1 text-[10px] uppercase text-mid-gray"
              style={{ letterSpacing: "0.22em" }}
            >
              {item.size}
            </p>
          </div>

          <button
            type="button"
            onClick={onRemove}
            aria-label={`Eliminar ${item.name} de la cesta`}
            className="text-mid-gray transition-colors hover:text-charcoal"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L11 11M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </button>
        </div>

        <div className="mt-auto flex items-end justify-between pt-3">
          <QtyStepper
            qty={item.quantity}
            onIncrement={() => onQtyChange(item.quantity + 1)}
            onDecrement={() => onQtyChange(item.quantity - 1)}
          />
          <span
            className="text-charcoal"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              fontWeight: 400,
            }}
          >
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </li>
  );
}

interface QtyStepperProps {
  qty: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function QtyStepper({ qty, onIncrement, onDecrement }: QtyStepperProps) {
  return (
    <div className="inline-flex items-center gap-3 text-charcoal">
      <button
        type="button"
        onClick={onDecrement}
        aria-label="Disminuir cantidad"
        className="inline-flex h-7 w-7 items-center justify-center text-mid-gray transition-colors hover:text-charcoal"
      >
        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" aria-hidden="true">
          <path d="M0 1H10" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>
      <span
        aria-live="polite"
        className="min-w-[18px] text-center text-[13px]"
        style={{ fontWeight: 400 }}
      >
        {qty}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label="Aumentar cantidad"
        className="inline-flex h-7 w-7 items-center justify-center text-mid-gray transition-colors hover:text-charcoal"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M5 0V10M0 5H10" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>
    </div>
  );
}
