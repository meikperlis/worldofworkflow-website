import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import {
  currentFocus,
  experiments,
  explorations,
  faqItems,
  journalEntries,
  learningQuestions,
  learningSteps,
  reflections,
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
              <p className="eyebrow">Persönliches Projekt von Meik Perlis</p>
              <h1>Wie digitale Abläufe Arbeit leichter machen können.</h1>
              <p className="hero__text">
                WorldofWorkflow ist mein persönlicher Ort für Automatisierung, n8n-Workflows,
                KI-Agenten und eigene Experimente mit digitalen Prozessen.
              </p>
              <div className="hero__actions">
                <a className="button" href="#project">
                  Projekt entdecken
                </a>
                <a className="button button--secondary" href="#journal">
                  Gedanken lesen
                </a>
              </div>
              <div className="hero__proof" aria-label="Charakter des Projekts">
                <span>neugierig</span>
                <span>praxisnah</span>
                <span>persönlich</span>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Reveal>
          <section className="trust-strip">
            <div className="container trust-strip__grid">
              <div>
                <strong>Eigene Experimente</strong>
                <span>aus Reibung wird Erkenntnis</span>
              </div>
              <div>
                <strong>Laufende Lernreise</strong>
                <span>verstehen vor automatisieren</span>
              </div>
              <div>
                <strong>WorldofWorkflow</strong>
                <span>ein persönliches digitales Labor</span>
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
                text="Mich reizt weniger das nächste Schlagwort als die Frage, wie neue Technik im Alltag wirklich belastbar wird."
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
          <section className="section section--split" id="project">
            <div className="container about-grid">
              <SectionHeading
                eyebrow="Über das Projekt"
                title="WorldofWorkflow ist aus echter Alltagserfahrung entstanden."
                text="Mein Name ist Meik Perlis. Durch meine Ausbildung als Kaufmann im Einzelhandel und meine breite Berufserfahrung kenne ich die kleinen Reibungen, Übergaben und Zeitfresser, die in Abläufen oft lange unsichtbar bleiben."
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
                  <h3>Warum mich gute Prozesse faszinieren</h3>
                  <p>
                    Mich interessiert nicht Technik um der Technik willen, sondern der Moment,
                    in dem ein Ablauf plötzlich klarer wird und weniger Energie kostet.
                  </p>
                  <p>
                    Deshalb sammle ich hier Gedanken, Experimente und Lernwege rund um digitale
                    Systeme, die Ordnung schaffen, ohne unnötig kompliziert zu werden.
                  </p>
                  <p>
                    WorldofWorkflow ist kein fertiger Endpunkt, sondern ein wachsender Ort, an
                    dem ich sichtbar mache, woran ich denke und was ich ausprobiere.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow="Themen"
                title="Womit ich mich gerade intensiv beschäftige."
                text="Mich interessieren besonders die Schnittstellen zwischen Prozessdenken, Alltag und neuen Werkzeugen."
              />

              <div className="card-grid card-grid--services">
                {explorations.map((item, index) => (
                  <article className="feature-card" key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
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
                eyebrow="Was mich daran reizt"
                title="Gute Systeme bringen mehr Ruhe in Abläufe."
                text="Wenn Technik wirklich passt, wirkt sie nicht laut. Sie macht Dinge lesbarer, leichter und weniger zerfasert."
              />

              <div className="benefit-list">
                {reflections.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow="Fragen"
                title="Die besten Experimente beginnen meist mit kleinen Irritationen."
                text="Oft lohnt sich genau dort ein genauerer Blick, wo etwas ständig nebenbei Energie kostet."
              />

              <div className="card-grid card-grid--signals">
                {learningQuestions.map((item) => (
                  <article className="signal-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
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
                eyebrow="Arbeitsweise"
                title="So nähere ich mich neuen Abläufen."
                text="Nicht mit der fertigen Antwort, sondern mit dem Wunsch, die natürliche Form eines Prozesses freizulegen."
              />

              <div className="process-grid">
                {learningSteps.map((step, index) => (
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
          <section className="section case-study-section" id="experiments">
            <div className="container case-study-grid">
              <SectionHeading
                eyebrow="Experiment"
                title="Ein persönlicher Workflow gegen private Bürokratie."
                text="Als eigenes Lern- und Bauprojekt: Wie lässt sich verstreute Post sauber in einen digitalen Ablauf überführen?"
              />

              <article className="case-study-card">
                <div className="case-study-card__steps">
                  <span>Foto per Smartphone</span>
                  <span>Telegram-Bot</span>
                  <span>KI-Qualifizierung</span>
                  <span>Google Sheet / OneDrive Excel</span>
                </div>
                <p>
                  Rechnungen, Belege, Briefe, Retouren und Amtsschreiben werden fotografiert und
                  per Telegram an einen Bot gesendet. Dieser qualifiziert die Inhalte, ergänzt
                  Kategorien wie Absender, Beschreibung, Preis und Fälligkeit und trägt alles
                  automatisch in eine Tabelle ein — inklusive Foto direkt in der passenden Zeile.
                </p>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow="Weitere Spuren"
                title="Themen, an denen ich weiterdenke."
                text="Manches ist schon gebaut, manches erst im Versuch. Genau daraus entsteht für mich der Reiz dieses Projekts."
              />

              <div className="card-grid card-grid--projects">
                {experiments.map((item) => (
                  <article className="project-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
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
                eyebrow="Einordnung"
                title="Was diese Seite ist — und was sie nicht sein will."
                text="Ein paar klare Antworten helfen mehr als eine große Pose."
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
                title="Gedanken, die ich unterwegs festhalte."
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
            <div className="container contact-grid contact-grid--simple">
              <div>
                <p className="eyebrow">Kontakt</p>
                <h2>Wenn dich ähnliche Fragen beschäftigen, freue ich mich über Austausch.</h2>
                <p>
                  Schreib mir gern, wenn du Gedanken zu Automatisierung, n8n, KI-Agenten oder
                  digitalen Abläufen teilen möchtest.
                </p>
              </div>

              <div className="contact-panel">
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
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

