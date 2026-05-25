import { navigation } from "@/lib/site-data";
import { BrandMark } from "./brand-mark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <a className="brand brand--footer" href="/#home">
            <BrandMark compact />
            <span>WorldofWorkflow</span>
          </a>
          <p>
            WorldofWorkflow – Meik Perlis, Nürnberg. Digitale Abläufe für
            Handwerksbetriebe in der Metropolregion — weniger Papierkram, mehr
            Zeit für echte Arbeit.
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
              <a href="mailto:meik.perlis@worldofworkflow.de">
                meik.perlis@worldofworkflow.de
              </a>
            </li>
            <li>
              <a href="/#contact">Kontakt aufnehmen</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/meik-perlis/"
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
