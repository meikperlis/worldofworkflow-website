"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-grid">
      {items.map((item, i) => (
        <article
          key={item.question}
          className={`faq-card faq-card--accordion${open === i ? " faq-card--open" : ""}`}
        >
          <button
            className="faq-card__question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            type="button"
          >
            <span>{item.question}</span>
            <span className="faq-card__icon" aria-hidden="true">
              {open === i ? "−" : "+"}
            </span>
          </button>
          <div className="faq-card__answer">
            <div className="faq-card__answer-inner">
              <p>{item.answer}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
