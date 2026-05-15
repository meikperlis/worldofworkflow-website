import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { journalEntries } from "@/lib/site-data";
import { notFound } from "next/navigation";

type JournalEntryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export default async function JournalEntryPage({ params }: JournalEntryPageProps) {
  const { slug } = await params;
  const entry = journalEntries.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="article-page">
        <article className="container article-shell">
          <a className="article-back-link" href="/journal">
            ← Zurück zum Journal
          </a>
          <p className="eyebrow">{entry.tags.join(" • ")}</p>
          <h1>{entry.title}</h1>
          <div className="article-meta">
            <span>{entry.date}</span>
            <span>{entry.readTime}</span>
          </div>
          <div className="article-body">
            {entry.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
