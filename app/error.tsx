"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Fehler im Server-Log sichtbar machen — hilfreich für Vercel-Logs
    // ohne dass der Besucher Details sieht.
    console.error("App-Error:", error);
  }, [error]);

  return (
    <main className="legal-page">
      <div className="container legal-page__content">
        <p className="eyebrow">Etwas ist schiefgelaufen</p>
        <h1>Beim Laden ist ein Fehler aufgetreten.</h1>
        <p>
          Das tut mir leid. Du kannst es gleich noch einmal versuchen — falls der Fehler bleibt,
          melde dich gerne kurz, damit ich nachschauen kann.
        </p>

        <section className="legal-card">
          <h2>Möglichkeiten</h2>
          <p>
            <button
              type="button"
              onClick={() => reset()}
              className="button"
              style={{ marginRight: 12 }}
            >
              Erneut versuchen
            </button>
            <Link href="/" className="button button--secondary">
              Zur Startseite
            </Link>
          </p>
          {error?.digest && (
            <p style={{ marginTop: 18, opacity: 0.6, fontSize: "0.85rem" }}>
              Referenz: <code>{error.digest}</code>
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
