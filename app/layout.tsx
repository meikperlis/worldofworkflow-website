import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.worldofworkflow.de"),
  title: "WorldofWorkflow – persönliches Projekt von Meik Perlis",
  description:
    "WorldofWorkflow ist ein persönliches Projekt von Meik Perlis über Automatisierung, n8n-Workflows, KI-Agenten und digitale Prozesse.",
  keywords: [
    "Automatisierung",
    "n8n",
    "digitale Workflows",
    "KI-Agenten",
    "Prozessdenken",
  ],
  openGraph: {
    title: "WorldofWorkflow – persönliches Projekt von Meik Perlis",
    description:
      "Gedanken, Experimente und Lernwege rund um Automatisierung, n8n-Workflows und digitale Prozesse.",
    type: "website",
    locale: "de_DE",
    siteName: "WorldofWorkflow",
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
