"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    title: "Origen botánico",
    body: "Activos seleccionados en pequeños lotes, con trazabilidad completa de la planta al envase.",
    icon: <LeafIcon />,
  },
  {
    title: "Fórmulas limpias",
    body: "Sin parabenos, sulfatos ni siliconas. Solo lo necesario para que tu piel respire.",
    icon: <DropIcon />,
  },
  {
    title: "Hecho en Europa",
    body: "Elaborado en pequeños laboratorios artesanales, con un compromiso de baja huella.",
    icon: <CompassIcon />,
  },
  {
    title: "Envase consciente",
    body: "Vidrio reciclable y cartón certificado FSC. Diseñado para una segunda vida.",
    icon: <RecycleIcon />,
  },
];

export function Features() {
  return (
    <section
      id="filosofia"
      aria-labelledby="filosofia-titulo"
      className="w-full bg-off-white"
    >
      <div className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-4 text-[10px] uppercase text-mid-gray"
              style={{ letterSpacing: "0.3em" }}
            >
              Nuestra filosofía
            </p>
            <h2
              id="filosofia-titulo"
              className="max-w-2xl text-charcoal"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)",
                lineHeight: 1.1,
              }}
            >
              Cosmética honesta,{" "}
              <span className="italic text-charcoal/85">elaborada con tiempo.</span>
            </h2>
          </div>
          <p className="max-w-md text-[13px] font-light leading-relaxed text-charcoal/65">
            Creemos en una belleza pausada. En fórmulas claras, en ingredientes
            que entiendes y en rituales que se disfrutan cada día.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: i * 0.08,
              }}
              className="flex flex-col"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-light-gray bg-white text-charcoal">
                {f.icon}
              </div>
              <h3
                className="mb-2 text-charcoal"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "22px",
                  lineHeight: 1.2,
                }}
              >
                {f.title}
              </h3>
              <p className="text-[13px] font-light leading-relaxed text-charcoal/65">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 19C5 13 9 7 19 5C17 15 11 19 5 19Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M5 19L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3C12 3 5 11 5 15.5C5 19.0899 8.13401 22 12 22C15.866 22 19 19.0899 19 15.5C19 11 12 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 16L10.5 10.5L16 8L13.5 13.5L8 16Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RecycleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 14L5 17L8 19M9 6L12 4L14 7M19 13L21 16L17 19"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M5 17L9 10L13 11M14 7L18 14L17 19M17 19H8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
