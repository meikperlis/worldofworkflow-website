"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Nachricht von ${name || "Interessent"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `E-Mail: ${email}`, "", message].join("\n"),
    );

    // TODO: Formular später optional an ein Backend, CRM oder Form-Service anbinden.
    window.location.href = `mailto:meik.perlis@worldofworkflow.de?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* TODO: Formular später optional an ein Backend, CRM oder Form-Service anbinden. */}
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Dein Name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@unternehmen.de"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Nachricht</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Worum geht es in deinem Projekt?"
          required
        />
      </div>
      <button className="button" type="submit">
        Nachricht senden
      </button>
    </form>
  );
}
