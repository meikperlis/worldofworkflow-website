import { CaseStudyDetail } from "@/components/case-study-detail";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import Image from "next/image";
import { caseStudies } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="hero section-shell" id="home">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow">Automatisierung mit KI — aus Nürnberg, auf Deutsch</p>
              <h1>Prozesse durchdenken. Dann automatisieren.</h1>
              <p className="hero__text">
                Ich habe jahrelang kaufmännische Abläufe abgearbeitet — dieselben
                Aufgaben, immer wieder, von Hand. Heute baue ich die Systeme, die das
                übernehmen. Zwei davon laufen produktiv.
              </p>
              <div className="hero__actions">
                <a className="button" href="#cases">
                  Projekte ansehen
                </a>
                <a className="button button--secondary" href="#contact">
                  Kontakt
                </a>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        {/* ── Über mich ─────────────────────────────────── */}
        <section className="section section--split" id="about">
          <div className="container about-grid">
            <div className="section-heading">
              <p className="eyebrow">Über mich</p>
              <h2>Aus der Sachbearbeitung in die Automatisierung.</h2>
              <p>
                Mein Name ist Meik Perlis. Ich lebe in der Metropolregion Nürnberg
                und komme aus der kaufmännischen Arbeit — Sachbearbeitung,
                Projektkoordination, Order Handling, quer durch Industrie, Automotive,
                Bildung und Dienstleistung.
              </p>
              <p>
                Überall dasselbe Muster: Dieselbe Rechnung wird dreimal angefasst,
                weil niemand weiß, wo sie liegt. Dieselbe Anfrage wird unterschiedlich
                bearbeitet, je nachdem wer gerade dran ist. Verantwortungsvolle Arbeit,
                die unnötig Energie kostet, weil sie nicht systematisiert ist.
              </p>
              <p>
                Irgendwann habe ich angefangen, das zu ändern. Erst für mich selbst,
                dann systematisch. Heute baue ich KI-gestützte Automatisierungen — auf
                Deutsch, in einem Feld, das fast ausschließlich auf Englisch stattfindet.
              </p>
              <p>
                Ich suche nach Umgebungen, in denen diese Denkweise gebraucht wird.
              </p>
            </div>

            <div className="profile-card">
              <div className="profile-card__image">
                <Image
                  src="/images/meik-perlis.jpeg"
                  alt="Portrait von Meik Perlis"
                  fill
                  sizes="(max-width: 760px) 100vw, 460px"
                  unoptimized
                  className="profile-card__photo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Projekt-Cases ──────────────────────────────── */}
        <section className="section case-section" id="cases">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Projekte</p>
              <h2>Zwei Systeme, die produktiv laufen.</h2>
              <p>
                Keine Demos, keine Konzepte — echte Automatisierungen mit täglicher
                Nutzung, Monitoring und Weiterentwicklung.
              </p>
            </div>

            <div className="case-list">
              {caseStudies.map((study) => (
                <CaseStudyDetail key={study.id} study={study} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Kontakt ────────────────────────────────────── */}
        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Kontakt</p>
              <h2>Klingt interessant? Dann lass uns reden.</h2>
              <p>
                Ich bin offen für Austausch — ob zu Automatisierung, Zusammenarbeit
                oder einer konkreten Idee. Am besten per Mail oder LinkedIn.
              </p>
              <div className="contact-meta">
                <span>E-Mail</span>
                <a href="mailto:meik.perlis@gmail.com">
                  meik.perlis@gmail.com
                </a>
              </div>
              <div className="contact-meta">
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/meik-perlis/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/meik-perlis
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
