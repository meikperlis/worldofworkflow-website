import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Datenschutzerklärung – Meik Perlis",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten beim Besuch von www.meikperlis.de.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__content">
          <p className="eyebrow">Rechtliches</p>
          <h1>Datenschutzerklärung</h1>
          <p>
            Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten
            beim Besuch der Website <strong>www.meikperlis.de</strong> verarbeitet werden,
            zu welchem Zweck dies geschieht und welche Rechte Sie haben. Die Verarbeitung
            erfolgt nach der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz
            (BDSG).
          </p>

          <section className="legal-card">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne von
              Art. 4 Nr. 7 DSGVO ist:
            </p>
            <p>
              <strong>Meik Perlis</strong>
              <br />
              E-Mail: meik.perlis@gmail.com
            </p>
            <p>
              Die vollständige Geschäftsanschrift sowie die übrigen Pflichtangaben finden Sie
              im <a href="/impressum">Impressum</a>.
            </p>
          </section>

          <section className="legal-card">
            <h2>2. Zugriffsdaten beim Besuch der Website</h2>
            <p>
              Beim Aufruf dieser Website werden durch den von uns beauftragten Hosting-Dienstleister
              automatisch Daten erhoben, die Ihr Browser an den Server übermittelt. Diese Server-Logs
              umfassen typischerweise:
            </p>
            <p>
              IP-Adresse des anfragenden Geräts, Datum und Uhrzeit der Anfrage, abgerufene URL,
              Statuscode der Antwort, übertragene Datenmenge, der vorher besuchte Verweis (Referrer)
              sowie Browser- und Betriebssystem-Informationen (User-Agent).
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt
              im technisch fehlerfreien Betrieb, in der Sicherheit der Website und in der
              Abwehr von Missbrauch. Eine Zusammenführung dieser Daten mit anderen Datenquellen
              oder eine Auswertung zu Marketing-Zwecken findet nicht statt. Die Logs werden vom
              Hosting-Dienstleister im Rahmen seiner üblichen technischen Aufbewahrungsfristen
              gespeichert und anschließend automatisch gelöscht.
            </p>
          </section>

          <section className="legal-card">
            <h2>3. Kontaktaufnahme</h2>
            <p>
              Das auf dieser Website angezeigte Kontaktformular übermittelt Ihre Eingaben (Name,
              E-Mail-Adresse, Nachricht) über den Dienst Formspree Inc. (USA) an uns. Formspree
              verarbeitet die Daten ausschließlich zur Weiterleitung der Nachricht. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Die Datenübermittlung in
              die USA erfolgt auf Grundlage des EU-US Data Privacy Framework.
            </p>
            <p>
              Wenn Sie uns direkt per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung
              Ihrer Anfrage und für eventuelle Anschlussfragen gespeichert. Die Daten werden
              gelöscht, sobald sie für die Zwecke der Kontaktaufnahme nicht mehr erforderlich sind
              und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section className="legal-card">
            <h2>4. Cookies und Tracking</h2>
            <p>
              Diese Website setzt keine Cookies zu Analyse-, Marketing- oder Tracking-Zwecken.
              Es kommen keine Tools wie Google Analytics, Matomo, Facebook-Pixel oder
              vergleichbare Dienste zum Einsatz. Eine Einwilligung über ein Cookie-Banner ist
              daher nicht erforderlich.
            </p>
          </section>

          <section className="legal-card">
            <h2>5. Externe Dienste und eingebettete Inhalte</h2>
            <p>
              Es werden keine externen Schriften, Karten, Videoplayer oder Social-Media-Inhalte
              direkt in die Website eingebunden. Es findet daher beim bloßen Aufruf der Seiten
              keine ungewollte Übertragung Ihrer IP-Adresse an Drittanbieter statt.
            </p>
          </section>

          <section className="legal-card">
            <h2>6. Hosting durch Vercel</h2>
            <p>
              Diese Website wird gehostet bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut,
              CA 91789, USA. Beim Aufruf der Seite werden die unter Punkt 2 beschriebenen
              Zugriffsdaten durch Vercel verarbeitet. Mit Vercel besteht ein
              Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.
            </p>
            <p>
              Eine Übermittlung in die USA ist im Rahmen des EU-US Data Privacy Framework auf
              Grundlage des Angemessenheitsbeschlusses der EU-Kommission vom 10. Juli 2023
              zulässig, soweit Vercel unter diesem Rahmen zertifiziert ist. Zusätzlich nutzt
              Vercel für europäische Besucher Edge-Standorte innerhalb der EU. Weitere
              Informationen finden Sie in der Datenschutzerklärung von Vercel unter
              {" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer noopener"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section className="legal-card">
            <h2>7. Transportverschlüsselung (TLS)</h2>
            <p>
              Die Verbindung zwischen Ihrem Browser und dieser Website ist über TLS verschlüsselt.
              Sie erkennen dies am Schlosssymbol in der Adresszeile und am Präfix
              <code> https://</code>. Eingaben in das Kontaktformular werden bis zum Aufruf
              Ihres E-Mail-Programms entsprechend geschützt übertragen.
            </p>
          </section>

          <section className="legal-card">
            <h2>8. Ihre Rechte als betroffene Person</h2>
            <p>
              Sie haben nach der DSGVO insbesondere folgende Rechte uns gegenüber:
            </p>
            <p>
              Recht auf Auskunft (Art. 15 DSGVO), Recht auf Berichtigung (Art. 16 DSGVO), Recht
              auf Löschung (Art. 17 DSGVO), Recht auf Einschränkung der Verarbeitung
              (Art. 18 DSGVO), Recht auf Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht
              auf Widerspruch gegen eine Verarbeitung, die auf Art. 6 Abs. 1 lit. f DSGVO
              gestützt wird (Art. 21 DSGVO).
            </p>
            <p>
              Zur Ausübung dieser Rechte genügt eine formlose E-Mail an die oben genannte Adresse.
            </p>
          </section>

          <section className="legal-card">
            <h2>9. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p>
              Unbeschadet anderweitiger Rechtsbehelfe steht Ihnen das Recht auf Beschwerde bei
              einer Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO). Zuständig ist in der Regel
              die Aufsichtsbehörde Ihres üblichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des
              Ortes des mutmaßlichen Verstoßes.
            </p>
          </section>

          <section className="legal-card">
            <h2>10. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung wird angepasst, sobald sich die Funktionen der Website
              oder die rechtlichen Rahmenbedingungen ändern. Es gilt jeweils die zum Zeitpunkt
              Ihres Besuchs abrufbare Fassung.
            </p>
            <p>
              Stand: Mai 2026.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
