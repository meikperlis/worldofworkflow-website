import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Impressum – WorldofWorkflow",
  description: "Anbieterkennzeichnung nach § 5 TMG.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__content">
          <p className="eyebrow">Rechtliches</p>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG.</p>

          <section className="legal-card">
            <h2>Anbieter</h2>
            <p>
              <strong>WorldofWorkflow – Inhaber: Meik Perlis</strong>
              <br />
              {/* TODO: Vollständige Geschäftsanschrift eintragen (Straße, PLZ, Ort, Land). */}
              <span style={{ opacity: 0.6 }}>[Anschrift folgt]</span>
            </p>
          </section>

          <section className="legal-card">
            <h2>Kontakt</h2>
            <p>
              E-Mail: meik.perlis@worldofworkflow.de
              <br />
              {/* TODO: Telefonnummer optional ergänzen, sonst diesen Block entfernen. */}
            </p>
          </section>

          <section className="legal-card">
            <h2>Umsatzsteuer-Identifikationsnummer</h2>
            <p>
              {/* TODO: USt-IdNr. nach § 27a UStG eintragen oder Block entfernen,
                  falls keine vorhanden ist. */}
              <span style={{ opacity: 0.6 }}>[USt-IdNr. folgt oder entfällt]</span>
            </p>
          </section>

          <section className="legal-card">
            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Meik Perlis
              <br />
              {/* TODO: Anschrift wie oben einsetzen, sobald gepflegt. */}
              <span style={{ opacity: 0.6 }}>[Anschrift folgt]</span>
            </p>
          </section>

          <section className="legal-card">
            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:
              {" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer noopener"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="legal-card">
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section className="legal-card">
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section className="legal-card">
            <h2>Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
