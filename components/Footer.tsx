import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-light-gray bg-white"
      aria-label="Pie de página"
    >
      <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/rosalie-logo.png"
              alt="Rosalie Beauty"
              width={160}
              height={160}
              sizes="96px"
              className="h-24 w-24 select-none"
            />
            <p
              className="mt-3 text-[9px] uppercase text-mid-gray"
              style={{ letterSpacing: "0.3em" }}
            >
              Natural Beauty · Real Care
            </p>
            <p className="mt-6 max-w-xs text-[13px] font-light leading-relaxed text-charcoal/75">
              Cosmética natural elaborada a mano en pequeños lotes. Fórmulas
              limpias, ingredientes nobles, envases reciclables.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <a
                href="https://www.instagram.com/p/DYX8e_ygjY9/?igsh=MWJlYXI1d2liMm9ucA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-charcoal/70 transition-colors hover:text-accent"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-charcoal/70 transition-colors hover:text-accent"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M10 8C10 8 13 7 14.5 9.5C16 12 13.5 15 11.5 14.5C10 14 10 13 10 13M10 13L9 19"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="https://vm.tiktok.com/ZNRGWU1uU/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-charcoal/70 transition-colors hover:text-accent"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M14 3V14.5C14 16.4 12.4 18 10.5 18C8.6 18 7 16.4 7 14.5C7 12.6 8.6 11 10.5 11H11.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 3C14 5.5 16 7.5 18.5 7.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3
              className="mb-5 text-[10px] uppercase text-charcoal"
              style={{ letterSpacing: "0.25em" }}
            >
              Colección
            </h3>
            <ul className="space-y-3 text-[13px] font-light text-charcoal/75">
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Cuerpo
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Rostro
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Aceites
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Rituales
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Sets de regalo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="mb-5 text-[10px] uppercase text-charcoal"
              style={{ letterSpacing: "0.25em" }}
            >
              Empresa
            </h3>
            <ul className="space-y-3 text-[13px] font-light text-charcoal/75">
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Ingredientes
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Sostenibilidad
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Diario
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="mb-5 text-[10px] uppercase text-charcoal"
              style={{ letterSpacing: "0.25em" }}
            >
              Certificaciones
            </h3>
            <ul className="space-y-4 text-[12px] font-light text-charcoal/75">
              <li className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-light-gray text-charcoal/80"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 19C5 13 9 7 19 5C17 15 11 19 5 19Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 19L12 12"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                100% Natural
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-light-gray text-charcoal/80"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 14C8 11 9 9 12 9C15 9 16 11 16 14C16 17 14 19 12 19C10 19 8 17 8 14Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M9 8C9 6 9.5 4 10.5 4C11.5 4 12 6 12 8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 8C15 6 14.5 4 13.5 4C12.5 4 12 6 12 8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <circle cx="10.5" cy="13" r="0.6" fill="currentColor" />
                    <circle cx="13.5" cy="13" r="0.6" fill="currentColor" />
                  </svg>
                </span>
                Cruelty-Free
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-light-gray text-charcoal/80"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12L8 7L13 8M19 12L16 17L11 16M12 4L15 9L11 16"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Envase Reciclable
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-light-gray pt-8 text-[12px] font-light text-mid-gray sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Rosalie Beauty. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px]">
            <a href="#" className="transition-colors hover:text-charcoal">
              Términos
            </a>
            <a href="#" className="transition-colors hover:text-charcoal">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-charcoal">
              Cookies
            </a>
            <span className="hidden h-3 w-px bg-light-gray sm:inline-block" />
            <div
              className="flex items-center gap-3 uppercase text-mid-gray"
              style={{ letterSpacing: "0.15em" }}
            >
              <span>VISA</span>
              <span>MASTERCARD</span>
              <span>PAYPAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
