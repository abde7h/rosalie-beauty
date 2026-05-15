"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export function Hero() {
  return (
    <section
      aria-label="Presentación"
      className="relative w-full bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="relative order-1 lg:order-1"
          style={{ backgroundColor: "#F0EDED" }}
        >
          <div className="relative flex min-h-[80vh] flex-col justify-end px-6 py-14 sm:px-12 sm:py-16 lg:min-h-screen lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute -top-20 -left-20 h-[60%] w-[70%] rounded-full opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), transparent 60%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 h-[55%] w-[60%]"
                style={{
                  background:
                    "radial-gradient(circle at 80% 90%, rgba(200,149,108,0.18), transparent 55%)",
                }}
              />
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="relative max-w-xl"
            >
              <motion.p
                variants={item}
                className="mb-6 text-[10px] uppercase text-charcoal/70"
                style={{ letterSpacing: "0.3em" }}
              >
                Edición primavera · 2026
              </motion.p>

              <motion.h1
                variants={item}
                className="text-charcoal"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(2.6rem, 6vw, 5.25rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.005em",
                }}
              >
                Cuida tu piel,
                <br />
                <span className="italic text-charcoal/85">cuida la tierra.</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-7 max-w-md text-[14px] font-light leading-relaxed text-charcoal/70"
              >
                Una colección esencial de cosmética natural, elaborada en
                pequeños lotes con ingredientes botánicos certificados y
                fórmulas limpias.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-10 flex flex-wrap items-center gap-5"
              >
                <Link
                  href="#productos"
                  className="group inline-flex h-12 items-center justify-center bg-[#0D0D0B] px-8 text-[11px] uppercase text-white transition-colors hover:bg-accent"
                  style={{ letterSpacing: "0.22em", fontWeight: 400 }}
                >
                  Descubrir la colección
                  <span className="ml-3 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="#filosofia"
                  className="inline-flex h-12 items-center text-[11px] uppercase text-charcoal underline-offset-[6px] transition hover:underline hover:text-accent"
                  style={{ letterSpacing: "0.22em" }}
                >
                  Nuestra filosofía
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div
          className="relative order-2 lg:order-2"
          style={{ backgroundColor: "#F2EDE8" }}
        >
          <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden lg:min-h-screen">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.7), transparent 70%)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.3,
                ease: EASE,
                delay: 0.45,
              }}
              className="relative flex h-full w-full items-center justify-center px-8"
            >
              <div className="relative aspect-square w-full max-w-[440px]">
                <div
                  className="pointer-events-none absolute inset-[-10%] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 60%)",
                  }}
                  aria-hidden="true"
                />
                <Image
                  src="/rosalie-logo.png"
                  alt="Rosalie Beauty"
                  fill
                  priority
                  sizes="(max-width: 1024px) 70vw, 440px"
                  className="relative select-none object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 30px 50px rgba(80,20,30,0.18)) drop-shadow(0 8px 16px rgba(80,20,30,0.08))",
                  }}
                />
              </div>
            </motion.div>

            <div className="pointer-events-none absolute bottom-10 left-10 right-10 flex items-end justify-between text-[10px] uppercase text-charcoal/55">
              <span style={{ letterSpacing: "0.25em" }}>Ritual diario</span>
              <span style={{ letterSpacing: "0.25em" }}>Vol. 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
