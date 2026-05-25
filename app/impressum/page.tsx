import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ZweiterKontaktwegLink } from "@/components/zweiter-kontaktweg-link";

export const metadata = {
  title: "Impressum – WorldofWorkflow",
  description: "Anbieterkennzeichnung nach § 5 TMG.",
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
              c/o Online-Impressum #8440
              <br />
              Europaring 90
              <br />
              53757 St. Augustin
              <br />
              Deutschland
            </p>
          </section>

          <section className="legal-card">
            <h2>Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:meik.perlis@worldofworkflow.de">
                meik.perlis@worldofworkflow.de
              </a>
              <br />
              Telefon:{" "}
              <a href="tel:+4901785547770">01785547770</a>
              <br />
              Zweiter Kontaktweg: <ZweiterKontaktwegLink />
            </p>
          </section>

          <section className="legal-card">
            <h2>Umsatzsteuer</h2>
            <p>
              Kein Umsatzsteuerausweis aufgrund Anwendung der Kleinunternehmerregelung
              gemäß § 19 UStG.
            </p>
          </section>

          <section className="legal-card">
            <h2>Zuständige Aufsichtsbehörde</h2>
            <p>
              Bayerische Landeszentrale für neue Medien (BLM)
              <br />
              Sitz: Deutschland
            </p>
          </section>

          <section className="legal-card">
            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Meik Perlis
              <br />
              c/o Online-Impressum #8440
              <br />
              Europaring 90
              <br />
              53757 St. Augustin
            </p>
          </section>

          <section className="legal-card">
            <h2>Geltungsbereich</h2>
            <p>
              Das hier angegebene Impressum gilt für alle Belange der
              Impressumspflicht sowie für alle Social-Media-Auftritte und ggf.
              für journalistisch-redaktionelle Inhalte. Erstellte Seiten können
              von verantwortlichen Personen bearbeitet werden; eine
              Vollständigkeit kann daher nicht garantiert werden.
            </p>
          </section>

          <section className="legal-card">
            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
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
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section className="legal-card">
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section className="legal-card">
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section className="legal-card">
            <h2>Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
