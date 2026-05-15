"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { CartIcon } from "./CartIcon";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { label: "Cosmética", href: "#productos" },
  { label: "Sobre nosotros", href: "#filosofia" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 4);
  });

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b border-light-gray bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_24px_-12px_rgba(13,13,11,0.08)]" : "shadow-none"
        }`}
      >
        <div className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className="group inline-flex h-9 w-9 items-center justify-center -ml-2 text-charcoal transition-colors hover:text-accent"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                aria-hidden="true"
              >
                <path d="M0 1H18" stroke="currentColor" strokeWidth="1" />
                <path d="M0 7H18" stroke="currentColor" strokeWidth="1" />
                <path d="M0 13H12" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Buscar"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center text-charcoal transition-colors hover:text-accent"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M13 13L17 17"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <Link
            href="/"
            aria-label="Rosalie Beauty — Inicio"
            className="group flex flex-col items-center justify-center"
          >
            <Image
              src="/rosalie-logo.png"
              alt="Rosalie Beauty"
              width={120}
              height={120}
              priority
              sizes="(max-width: 640px) 56px, 64px"
              className="h-14 w-14 select-none sm:h-16 sm:w-16"
            />
          </Link>

          <div className="flex items-center justify-end gap-5">
            <button
              type="button"
              aria-label="Cambiar moneda"
              className="hidden items-center gap-1 text-[11px] uppercase text-charcoal/85 transition-colors hover:text-accent sm:inline-flex"
              style={{ letterSpacing: "0.18em" }}
            >
              EUR €
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                aria-hidden="true"
                className="mt-px"
              >
                <path
                  d="M1 1L4.5 4.5L8 1"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <CartIcon />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-white"
      role="dialog"
      aria-modal="true"
      aria-label="Menú principal"
    >
      <div className="flex h-20 items-center justify-between border-b border-light-gray px-5 sm:px-8">
        <span
          className="text-[10px] uppercase text-mid-gray"
          style={{ letterSpacing: "0.3em" }}
        >
          Menú
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="-mr-2 inline-flex h-9 w-9 items-center justify-center text-charcoal transition-colors hover:text-accent"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1L17 17M17 1L1 17"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </button>
      </div>

      <motion.nav
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
        }}
        className="flex flex-col items-center justify-center px-6 py-20"
      >
        {NAV_LINKS.map((link) => (
          <motion.div
            key={link.href}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: EASE }}
            className="my-3"
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="block text-charcoal transition-colors hover:text-accent"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(36px, 7vw, 56px)",
                letterSpacing: "0.04em",
              }}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 text-[10px] uppercase text-mid-gray">
        <span style={{ letterSpacing: "0.3em" }}>
          Natural Beauty · Real Care
        </span>
        <span style={{ letterSpacing: "0.15em" }} className="opacity-70">
          © {new Date().getFullYear()} Rosalie Beauty
        </span>
      </div>
    </motion.div>
  );
}
