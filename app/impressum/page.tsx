import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__content">
          <p className="eyebrow">Rechtliches</p>
          <h1>Impressum</h1>
          <p>TODO: Vollständige Impressumsangaben eintragen.</p>
          <div className="legal-card">
            <p>Meik Perlis</p>
            <p>TODO: Geschäftsanschrift</p>
            <p>E-Mail: meik.perlis@worldofworkflow.de</p>
            <p>TODO: Weitere gesetzlich erforderliche Angaben ergänzen.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
