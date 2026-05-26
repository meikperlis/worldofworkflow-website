import { contact, navigation } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <a className="brand brand--footer" href="/">
            <span>Meik Perlis</span>
          </a>
          <p>
            KI-gestützte Automatisierungen für kaufmännische Prozesse.
            Produktive Systeme, realer Einsatz, auf Deutsch.
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Kontakt</h3>
          <ul>
            <li>
              <a href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li>
              <a href="/#contact">Kontakt aufnehmen</a>
            </li>
            <li>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Rechtliches</h3>
          <ul>
            <li>
              <a href="/impressum">Impressum</a>
            </li>
            <li>
              <a href="/datenschutz">Datenschutz</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
