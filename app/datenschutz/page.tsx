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
          <p>Stand: 16. Mai 2026</p>
          <div className="legal-card">
            <h2>1. Verantwortlicher</h2>
            <p>Meik Perlis</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:meik.perlis@worldofworkflow.de">
                meik.perlis@worldofworkflow.de
              </a>
            </p>
          </div>

          <div className="legal-card">
            <h2>2. Hosting und Server-Logfiles</h2>
            <p>
              Diese Website wird über Vercel gehostet. Beim Aufruf der Website können technisch
              notwendige Zugriffsdaten verarbeitet werden, etwa IP-Adresse, Datum und Uhrzeit
              des Zugriffs, aufgerufene Seite, übertragene Datenmenge, Browsertyp und
              Betriebssystem. Die Verarbeitung erfolgt, um die Website technisch bereitzustellen,
              Stabilität und Sicherheit zu gewährleisten und Missbrauch zu erkennen.
            </p>
          </div>

          <div className="legal-card">
            <h2>3. Kontaktaufnahme</h2>
            <p>
              Wenn du mir per E-Mail schreibst, verarbeite ich die von dir übermittelten Daten
              ausschließlich, um deine Nachricht zu lesen und zu beantworten. Eine Weitergabe an
              Dritte erfolgt nicht, sofern keine gesetzliche Pflicht dazu besteht.
            </p>
          </div>

          <div className="legal-card">
            <h2>4. Externe Links</h2>
            <p>
              Diese Website enthält einen Link zu meinem LinkedIn-Profil. Wenn du diesem Link
              folgst, gelten die Datenschutzbestimmungen des jeweiligen externen Anbieters.
            </p>
          </div>

          <div className="legal-card">
            <h2>5. Keine Analyse- oder Tracking-Tools</h2>
            <p>
              Auf dieser Website werden aktuell keine Analyse-Tools, Werbetracker oder
              eingebetteten Drittanbieter-Dienste eingesetzt.
            </p>
          </div>

          <div className="legal-card">
            <h2>6. Deine Rechte</h2>
            <p>
              Du hast im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und
              Datenübertragbarkeit. Außerdem besteht ein Beschwerderecht bei einer zuständigen
              Datenschutzaufsichtsbehörde.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
