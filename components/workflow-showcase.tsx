"use client";

import { useState } from "react";

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

export function WorkflowShowcase() {
  const [active, setActive] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  function handleActivate(i: number) {
    if (completed) return;
    setActive(i);
    if (i === STEPS.length - 1) {
      setCompleted(true);
    }
  }

  function handleLeave() {
    if (!completed) {
      setActive(null);
    }
  }

  const isActive = (i: number) =>
    completed ? i === STEPS.length - 1 : i === active;

  return (
    <section className="section showcase-section" id="showcase">
      <div className="container">
        <div className="showcase-header">
          <p className="eyebrow">Live-Demo</p>
          <h2 className="showcase-title">So funktioniert es in der Praxis.</h2>
          <p className="showcase-subtitle">
            Fahre mit der Maus über die Schritte — oder tippe sie der Reihe nach an.
          </p>
        </div>

        <div className="showcase-steps">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`showcase-step${isActive(i) ? " showcase-step--active" : ""}`}
              onMouseEnter={() => handleActivate(i)}
              onMouseLeave={handleLeave}
              onClick={() => handleActivate(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleActivate(i)}
              aria-label={step.label}
            >
              <span className="showcase-step__num">{step.num}</span>
              <h3>{step.label}</h3>
              <p>{step.detail}</p>
              <span className="showcase-step__meta">{step.meta}</span>
            </div>
          ))}
        </div>

        <div className={`showcase-result${completed ? " showcase-result--visible" : ""}`}>
          Fertig. Keine App. Kein Tippen. Einfach Foto schicken.
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
