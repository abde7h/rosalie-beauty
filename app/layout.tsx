import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rosalie Beauty · Natural Beauty, Real Care",
  description:
    "Cosmética natural elaborada en pequeños lotes. Fórmulas limpias, ingredientes botánicos y envases reciclables.",
  metadataBase: new URL("https://rosaliebeauty.example.com"),
  icons: {
    icon: "/rosalie-logo.png",
    apple: "/rosalie-logo.png",
  },
  openGraph: {
    title: "Rosalie Beauty · Cosmética natural",
    description:
      "Una colección esencial de cosmética natural, elaborada a mano con ingredientes botánicos certificados.",
    type: "website",
    images: ["/rosalie-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen bg-white text-charcoal antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
