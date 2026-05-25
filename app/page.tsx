import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkflowShowcase } from "@/components/workflow-showcase";
import Image from "next/image";
import {
  caseStudies,
  currentFocus,
  faqItems,
  processSteps,
  services,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-shell" id="home">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow">Für Handwerksbetriebe in Nürnberg & Umgebung</p>
              <h1>Weniger Papierkram. Mehr Zeit für echte Arbeit.</h1>
              <p className="hero__text">
                Ich baue digitale Abläufe für Handwerksbetriebe — damit weniger Zeit in
                Papierkram steckt und mehr in echte Arbeit.
              </p>
              <div className="hero__actions">
                <a className="button" href="#contact">
                  30 Min. Erstgespräch — kostenlos
                </a>
                <a className="button button--secondary" href="#showcase">
                  Beispiel ansehen
                </a>
              </div>
              <div className="hero__proof" aria-label="Kernvorteile">
                <span>kein Tippen</span>
                <span>läuft auf dem Handy</span>
                <span>einmalig aufsetzen</span>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Reveal>
          <section className="trust-strip">
            <div className="container trust-strip__grid">
              <div>
                <strong>Kassenbon fotografiert</strong>
                <span>Tabelle füllt sich von selbst</span>
              </div>
              <div>
                <strong>Anfrage erhalten</strong>
                <span>automatisch sortiert & weitergeleitet</span>
              </div>
              <div>
                <strong>Foto geschossen</strong>
                <span>sauber archiviert mit Datum & Projekt</span>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <WorkflowShowcase />
        </Reveal>

        <Reveal>
          <section className="section current-section">
            <div className="container">
              <SectionHeading
                eyebrow="Typische Zeitfresser"
                title="Womit Handwerksbetriebe täglich kämpfen."
                text="Diese drei Probleme hören sich klein an — summieren sich aber zu Stunden pro Woche, die woanders fehlen."
              />

              <div className="card-grid card-grid--current">
                {currentFocus.map((item) => (
                  <article className="current-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section section--split" id="about">
            <div className="container about-grid">
              <SectionHeading
                eyebrow="Über mich"
                title="Ich kenne die Abläufe — und baue die Lösungen selbst."
                text="Mein Name ist Meik Perlis. Ich bin in Nürnberg ansässig und arbeite mit Handwerksbetrieben in der Metropolregion. Als Kaufmann im Einzelhandel habe ich selbst erlebt, was in Betrieben täglich Zeit kostet: Zettel, die verschwinden, Abläufe, die niemand aufgeschrieben hat, Aufgaben, die immer wieder von Hand erledigt werden."
              />

              <div className="profile-card">
                <div className="profile-card__image">
                  <Image
                    src="/images/meik-perlis.jpeg"
                    alt="Portrait von Meik Perlis"
                    fill
                    sizes="(max-width: 760px) 100vw, 360px"
                    className="profile-card__photo"
                  />
                </div>
                <div className="profile-card__content">
                  <h3>Gebaut für Betriebe, die keine Zeit für Technik haben</h3>
                  <p>
                    Ich baue und betreibe eigene Workflows — für meinen eigenen Alltag, aber
                    so entwickelt wie für einen Handwerksbetrieb: verlässlich, auf dem
                    Smartphone nutzbar, ohne Einarbeitung.
                  </p>
                  <p>
                    Was ich umsetze, habe ich vorher selbst getestet. Was ich empfehle,
                    läuft bereits — nicht nur im Konzept.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section" id="services">
            <div className="container">
              <SectionHeading
                eyebrow="Schwerpunkte"
                title="Wobei ich konkret unterstützen kann."
                text="Aus Analyse, Struktur und Automatisierung entstehen Lösungen, die im Alltag verständlich bleiben und wirklich entlasten."
              />

              <div className="card-grid card-grid--services">
                {services.map((service, index) => (
                  <article className="feature-card" key={service.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section section--soft">
            <div className="container">
              <SectionHeading
                eyebrow="Ablauf"
                title="So läuft es ab."
                text="Der technische Teil kommt nicht zuerst. Zuerst muss klar sein, welche Arbeit wirklich leichter werden soll."
              />

              <div className="process-grid">
                {processSteps.map((step, index) => (
                  <article className="process-card" key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section case-study-section">
            <div className="container">
              <SectionHeading
                eyebrow="Projekt-Cases"
                title="Zwei Projekte, an denen man meine Arbeitsweise gut erkennt."
                text="Nicht nur was gebaut wurde ist interessant, sondern wie: mit echter Nutzung im Blick, kontrollierten Schritten und Lösungen, die im Alltag Vertrauen verdienen."
              />

              <div className="case-study-list">
                {caseStudies.map((caseStudy) => (
                  <article className="case-study-card" key={caseStudy.title}>
                    <div className="case-study-card__header">
                      <h3>{caseStudy.title}</h3>
                      <p>{caseStudy.intro}</p>
                    </div>
                    <div className="case-study-card__steps">
                      {caseStudy.steps.map((step) => (
                        <span key={step}>{step}</span>
                      ))}
                    </div>
                    <p>{caseStudy.text}</p>
                    <p className="case-study-card__note">{caseStudy.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section faq-section">
            <div className="container">
              <SectionHeading
                eyebrow="FAQ"
                title="Die Fragen, die vor dem ersten Workflow meist wirklich zählen."
                text="Wenn du noch nicht weißt, ob Automatisierung für dich schon sinnvoll ist, beginnt genau hier die Orientierung."
              />

              <div className="faq-grid">
                {faqItems.map((item) => (
                  <article className="faq-card" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section contact-section" id="contact">
            <div className="container contact-grid">
              <div>
                <p className="eyebrow">Kontakt</p>
                <h2>30 Minuten. Kostenlos. Zeig mir deinen größten Zeitfresser.</h2>
                <p>
                  Kurzes Erstgespräch, kein Verkaufsgespräch. Wir schauen gemeinsam, wo bei
                  dir der größte Hebel liegt — und ob ein Workflow wirklich hilft.
                </p>
                <p className="contact-local">
                  Ich bin in Nürnberg ansässig — persönliche Gespräche vor Ort sind möglich.
                </p>
                <div className="contact-meta">
                  <span>E-Mail</span>
                  <a href="mailto:meik.perlis@worldofworkflow.de">
                    meik.perlis@worldofworkflow.de
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
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
