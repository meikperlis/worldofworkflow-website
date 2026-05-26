import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.worldofworkflow.de"),
  title: "Meik Perlis — Automatisierung mit KI",
  description:
    "Ich baue KI-gestützte Automatisierungen für kaufmännische Prozesse. Zwei produktive Systeme, realer Einsatz, auf Deutsch.",
  keywords: [
    "Automatisierung",
    "KI",
    "Workflows",
    "n8n",
    "Nürnberg",
    "Meik Perlis",
    "GPT",
    "Prozessautomatisierung",
  ],
  openGraph: {
    title: "Meik Perlis — Automatisierung mit KI",
    description:
      "KI-gestützte Automatisierungen für kaufmännische Prozesse. Produktive Systeme, realer Einsatz.",
    type: "website",
    locale: "de_DE",
    siteName: "Meik Perlis",
  },
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Meik Perlis" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
