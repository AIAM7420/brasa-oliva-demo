import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
const heading = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001",
  ),
  title: {
    default: "Brasa & Oliva | El fuego nos reúne",
    template: "%s | Brasa & Oliva",
  },
  description:
    "Una demostración de cocina contemporánea: ingredientes de temporada, fuego y sobremesa.",
  openGraph: {
    title: "Brasa & Oliva",
    description: "El fuego nos reúne. Cocina contemporánea de demostración.",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/mesa.jpg",
        width: 1600,
        height: 1067,
        alt: "Mesa gastronómica",
      },
    ],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
