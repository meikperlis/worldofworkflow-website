import type { CaseStudy } from "@/lib/site-data";
import { TechTag } from "./tech-tag";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <article className="case-detail">
      <div className="case-detail__header">
        <h3>{study.title}</h3>
        <p className="case-detail__oneliner">{study.oneliner}</p>
      </div>

      <div className="case-detail__problem">
        <h4>Problem</h4>
        <p>{study.problem}</p>
      </div>

      <div className="case-detail__stack">
        <h4>Tech-Stack</h4>
        <div className="case-detail__tags">
          {study.techStack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </div>

      <div className="case-detail__decisions">
        <h4>Designentscheidungen</h4>
        <ul>
          {study.designDecisions.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </div>

      <div className="case-detail__stats">
        <h4>Zahlen</h4>
        <div className="case-detail__stats-grid">
          {study.stats.map((stat) => (
            <div key={stat.label} className="case-detail__stat">
              <span className="case-detail__stat-value">{stat.value}</span>
              <span className="case-detail__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {study.githubUrl && (
        <a
          className="case-detail__github"
          href={study.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ansehen
        </a>
      )}
    </article>
  );
}
