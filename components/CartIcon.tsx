"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export function CartIcon() {
  const { itemCount, openCart, isHydrated } = useCart();
  const displayCount = isHydrated ? itemCount : 0;

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Abrir cesta, ${displayCount} ${
        displayCount === 1 ? "artículo" : "artículos"
      }`}
      className="group relative flex items-center justify-center p-2 -mr-2"
    >
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        aria-hidden="true"
        className="text-charcoal transition-colors group-hover:text-accent"
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

      <AnimatePresence>
        {displayCount > 0 && (
          <motion.span
            key={displayCount}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 26 }}
            className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#0D0D0B] px-1 text-[9px] font-medium leading-none text-white"
            aria-hidden="true"
          >
            {displayCount}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
