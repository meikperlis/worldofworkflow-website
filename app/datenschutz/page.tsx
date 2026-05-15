import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__content">
          <p className="eyebrow">Rechtliches</p>
          <h1>Datenschutz</h1>
          <p>
            TODO: Datenschutzerklärung nach finaler technischer Ausgestaltung der Website
            eintragen.
          </p>
          <div className="legal-card">
            <p>
              Noch offen sind insbesondere Hosting, Kontaktformular-Verarbeitung, Analyse-Tools
              und mögliche eingebundene Drittanbieter.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
