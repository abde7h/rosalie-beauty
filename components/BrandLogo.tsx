import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "hero";
  withTagline?: boolean;
  href?: string;
  className?: string;
}

const SIZES: Record<NonNullable<BrandLogoProps["variant"]>, number> = {
  navbar: 56,
  footer: 88,
  hero: 360,
};

export function BrandLogo({
  variant = "navbar",
  withTagline = true,
  href = "/",
  className = "",
}: BrandLogoProps) {
  const size = SIZES[variant];

  const content = (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <Image
        src="/rosalie-logo.png"
        alt="Rosalie Beauty"
        width={size}
        height={size}
        priority={variant !== "footer"}
        sizes={`${size}px`}
        className="block h-auto w-auto select-none"
        style={{ maxHeight: size, maxWidth: size }}
      />
      {withTagline && variant === "navbar" && (
        <span
          className="mt-1 hidden text-[8px] uppercase text-mid-gray sm:inline-block"
          style={{ letterSpacing: "0.3em" }}
        >
          Natural Beauty · Real Care
        </span>
      )}
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      aria-label="Rosalie Beauty — Inicio"
      className="inline-flex items-center justify-center"
    >
      {content}
    </Link>
  );
}
