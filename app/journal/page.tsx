import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { journalEntries } from "@/lib/site-data";

export default function JournalPage() {
  return (
    <>
      <Header />
      <main className="journal-index-page">
        <div className="container">
          <p className="eyebrow">Journal</p>
          <h1>Gedanken über Automatisierung, Prozesse und Experimente.</h1>
          <div className="card-grid card-grid--journal">
            {journalEntries.map((entry) => (
              <a className="journal-card" href={`/journal/${entry.slug}`} key={entry.slug}>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
                <span>{entry.readTime}</span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
