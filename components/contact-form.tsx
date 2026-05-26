"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        "https://formspree.io/f/meedrjoo",
        {
          method: "POST",
          body: new FormData(e.currentTarget),
          headers: { Accept: "application/json" },
        },
      );
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success">
        <p>✓ Nachricht erhalten — ich melde mich so schnell wie möglich.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
            placeholder="name@betrieb.de"
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
          placeholder="Worüber möchtest du dich austauschen?"
          required
        />
      </div>
      {status === "error" && (
        <p className="contact-error">
          Etwas ist schiefgelaufen — schreib direkt an{" "}
          <a href="mailto:meik.perlis@gmail.com">
            meik.perlis@gmail.com
          </a>
        </p>
      )}
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
      </button>
    </form>
  );
}
