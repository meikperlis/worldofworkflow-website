import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import {
  automationSignals,
  benefits,
  currentFocus,
  faqItems,
  journalEntries,
  processSteps,
  projects,
  services,
  tools,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-shell" id="home">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow">KI • Automatisierung • Digitale Workflows</p>
              <h1>Workflows, die Arbeit leichter machen.</h1>
              <p className="hero__text">
                Persönliches Portfolio von Meik Perlis über Automatisierung, n8n-Workflows,
                KI-Agenten und die Frage, wie digitale Prozesse im Alltag wirklich besser
                werden.
              </p>
              <div className="hero__actions">
                <a className="button" href="#about">
                  Mehr erfahren
                </a>
                <a className="button button--secondary" href="#services">
                  Schwerpunkte ansehen
                </a>
              </div>
              <div className="hero__proof" aria-label="Kernvorteile">
                <span>klar</span>
                <span>skalierbar</span>
                <span>praxisnah</span>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Reveal>
          <section className="trust-strip">
            <div className="container trust-strip__grid">
              <div>
                <strong>Für Selbstständige</strong>
                <span>weniger Bürokratie, mehr Fokus</span>
              </div>
              <div>
                <strong>Für KMU</strong>
                <span>saubere Prozesse statt Tool-Chaos</span>
              </div>
              <div>
                <strong>Aus echter Praxis</strong>
                <span>Automatisierung mit Blick fürs Ganze</span>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section current-section">
            <div className="container">
              <SectionHeading
                eyebrow="Aktuell"
                title="Woran ich gerade arbeite und worin ich tiefer eintauche."
                text="Mich reizt weniger das nächste Schlagwort als die Frage, wie man neue Technik wirklich belastbar in den Alltag übersetzt."
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
                title="Ich beschäftige mich tiefer mit digitalen Prozessen, als man mir vielleicht auf den ersten Blick zutraut."
                text="Mein Name ist Meik Perlis. Durch meine Ausbildung als Kaufmann im Einzelhandel und meine breite Berufserfahrung kenne ich die Abläufe, Reibungen und kleinen Zeitfresser, die in Unternehmen täglich Wirkung verlieren lassen."
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
                  <h3>Praxisnaher Blick auf echte Prozesse</h3>
                  <p>
                    Ich weiß aus eigener Erfahrung, wo Automatisierung sofort spürbar hilft:
                    dort, wo wiederkehrende Aufgaben Zeit binden, Informationen versanden oder
                    Abläufe unnötig kompliziert werden.
                  </p>
                  <p>
                    Genau deshalb denke ich bei der Planung nicht nur an das einzelne Tool,
                    sondern an alles, was hinter einem Prozess noch dranhängt.
                  </p>
                  <p>
                    WorldofWorkflow ist mein Ort, um diese Arbeit sichtbar zu machen:
                    Experimente, Gedanken, Systeme und die Art, wie ich mich in neue
                    Technologien hineinarbeite.
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
                title="Womit ich mich gerade intensiv beschäftige."
                text="Mich interessieren vor allem Lösungen, die technisch sauber sind und im echten Alltag einen spürbaren Unterschied machen."
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
          <section className="section section--dark">
            <div className="container benefits-grid">
              <SectionHeading
                eyebrow="Nutzen"
                title="Mehr Fluss. Weniger Reibung."
                text="Gute Automatisierung fühlt sich nicht nach mehr Software an, sondern nach weniger Widerstand."
              />

              <div className="benefit-list">
                {benefits.map((benefit) => (
                  <div key={benefit}>{benefit}</div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow="Wann lohnt es sich?"
                title="Nicht jede Aufgabe braucht KI. Aber manche Prozesse schreien danach."
                text="Gute Automatisierung beginnt nicht mit einem Tool, sondern mit den richtigen Fragen."
              />

              <div className="card-grid card-grid--signals">
                {automationSignals.map((signal) => (
                  <article className="signal-card" key={signal.title}>
                    <h3>{signal.title}</h3>
                    <p>{signal.text}</p>
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
                title="So denke ich über gute Automatisierung nach."
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
            <div className="container case-study-grid">
              <SectionHeading
                eyebrow="Praxisbeispiel"
                title="Ein persönliches Experiment gegen private Bürokratie."
                text="Nicht als Kundenprojekt, sondern als eigenes Lern- und Bauprojekt: Wie lässt sich verstreute Post sauber in einen digitalen Ablauf überführen?"
              />

              <article className="case-study-card">
                <div className="case-study-card__steps">
                  <span>Foto per Smartphone</span>
                  <span>Telegram-Bot</span>
                  <span>KI-Qualifizierung</span>
                  <span>Google Sheet / OneDrive Excel</span>
                </div>
                <p>
                  Rechnungen, Belege, Briefe, Retouren und Amtsschreiben werden fotografiert
                  und per Telegram an einen Bot gesendet. Dieser qualifiziert die Inhalte,
                  ergänzt Kategorien wie Absender, Beschreibung, Preis und Fälligkeit und
                  trägt alles automatisch in eine Tabelle ein — inklusive Foto direkt in der
                  passenden Zeile.
                </p>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section" id="projects">
            <div className="container">
              <SectionHeading
                eyebrow="Mögliche Anwendungsbeispiele"
                title="So kann Automatisierung konkret aussehen."
                text="Auch ohne bestehende Kunden-Cases lässt sich sehr klar zeigen, wo der Hebel liegt."
              />

              <div className="card-grid card-grid--projects">
                {projects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </article>
                ))}
              </div>

              <div className="tool-stack">
                {tools.map((tool) => (
                  <span key={tool}>{tool}</span>
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
          <section className="section section--soft" id="journal">
            <div className="container">
              <SectionHeading
                eyebrow="Journal"
                title="Themen, über die ich künftig schreiben möchte."
                text="WorldofWorkflow soll nicht nur zeigen, was ich baue, sondern auch, wie ich über gute Automatisierung nachdenke."
              />

              <div className="card-grid card-grid--journal">
                {journalEntries.map((item) => (
                  <a className="journal-card" href={`/journal/${item.slug}`} key={item.slug}>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <span>{item.readTime}</span>
                  </a>
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
                <h2>Du möchtest dich über Automatisierung austauschen?</h2>
                <p>
                  Wenn du dich für digitale Workflows, n8n, KI-Agenten oder praktische
                  Prozessverbesserung interessierst, freue ich mich über eine Nachricht.
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
