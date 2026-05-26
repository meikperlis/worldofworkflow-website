import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Seite nicht gefunden – Meik Perlis",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__content">
          <p className="eyebrow">404</p>
          <h1>Diese Seite gibt es nicht.</h1>
          <p>
            Vielleicht wurde der Link verändert oder die Seite ist umgezogen.
          </p>

          <section className="legal-card">
            <h2>Vorschläge</h2>
            <p>
              <Link href="/">Zur Startseite</Link>
              <br />
              <Link href="/#cases">Projekte ansehen</Link>
              <br />
              <Link href="/#contact">Kontakt aufnehmen</Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
