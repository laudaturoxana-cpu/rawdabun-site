import type { Metadata } from "next";
import { Space_Grotesk, Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raw da Bun - Torturi Raw Vegane 100% Fără Alergeni | București",
  description: "Torturi și prăjituri raw vegane create cu pasiune pentru copii cu alergii. Fără zahăr rafinat, fără gluten, fără E-uri. Laborator DSV/DSP certificat București.",
  keywords: ["torturi raw vegane", "prajituri fara alergeni", "raw vegan bucuresti", "torturi fara zahar", "cofetarie raw", "deserturi raw vegane"],
  openGraph: {
    title: "Raw da Bun - Torturi Raw Vegane pentru Copii cu Alergii",
    description: "Fiecare copil merită să sărbătorească fără să se simtă exclus. Torturi 100% fără alergeni, create de Andreea pentru Matei.",
    type: "website",
    locale: "ro_RO",
    siteName: "Raw da Bun",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
