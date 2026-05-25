"use client";

import { useEffect, useState } from "react";

const STEPS = [
  {
    num: "01",
    label: "Foto aufnehmen",
    detail: "Kassenbon auf der Baustelle fotografieren — Smartphone reicht.",
    meta: "Kein Scanner nötig",
  },
  {
    num: "02",
    label: "Schicken",
    detail: "Foto einfach per Telegram oder WhatsApp in einen Chat schicken.",
    meta: "Keine extra App",
  },
  {
    num: "03",
    label: "KI verarbeitet",
    detail: "Betrag, Absender, Kategorie und Datum werden automatisch erkannt.",
    meta: "In wenigen Sekunden",
  },
  {
    num: "04",
    label: "Fertig eingetragen",
    detail: "Alle Daten landen sauber in der Tabelle — nichts vergessen.",
    meta: "Google Sheets · Excel",
  },
];

const STEP_DURATION = 1800;
const FINAL_PAUSE = 2400;

export function WorkflowShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const duration = active === STEPS.length - 1 ? FINAL_PAUSE : STEP_DURATION;
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, duration);
    return () => clearTimeout(id);
  }, [active]);

  const isDone = active === STEPS.length - 1;

  return (
    <section className="section showcase-section" id="showcase">
      <div className="container">
        <div className="showcase-header">
          <p className="eyebrow">Live-Demo</p>
          <h2 className="showcase-title">So funktioniert es in der Praxis.</h2>
          <p className="showcase-subtitle">
            Du fotografierst einen Kassenbon auf der Baustelle — schickst ihn ab — fertig.
          </p>
        </div>

        <div className="showcase-steps">
          {STEPS.map((step, i) => {
            const isActive = i === active;
            const isPast = i < active || (active === 0 && i > 0 ? false : i < active);
            return (
              <div
                key={step.num}
                className={[
                  "showcase-step",
                  isActive ? "showcase-step--active" : "",
                  i < active ? "showcase-step--done" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="showcase-step__num">{step.num}</span>
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
                <span className="showcase-step__meta">{step.meta}</span>
              </div>
            );
          })}
        </div>

        <div className={`showcase-result${isDone ? " showcase-result--visible" : ""}`}>
          Fertig. Keine App. Kein Tippen. Einfach Foto schicken.
        </div>

        <div className="showcase-dots" aria-hidden="true">
          {STEPS.map((_, i) => (
            <span key={i} className={`showcase-dot${i === active ? " showcase-dot--active" : ""}`} />
          ))}
        </div>

        <div className="showcase-cta">
          <a className="button" href="#contact">
            30 Min. Erstgespräch — kostenlos
          </a>
        </div>
      </div>
    </section>
  );
}
