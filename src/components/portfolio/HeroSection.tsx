import type { HeroIdentity } from "@/lib/portfolio-types";
import { TechnicalBadge } from "./TechnicalBadge";

interface HeroSectionProps {
  hero: HeroIdentity;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      id="identity"
      className="hero-section"
      aria-labelledby="portfolio-hero-title"
    >
      <div>
        <p className="hero-section__kicker">
          <span>/identity</span>
          <span>{hero.location}</span>
        </p>
        <h1 id="portfolio-hero-title">{hero.name}</h1>
        <p className="hero-section__title">{hero.title}</p>
        <p className="hero-section__positioning">{hero.positioning}</p>
        <p className="hero-section__summary">{hero.summary}</p>
        <div className="badge-row" aria-label="Technical signals">
          {hero.signals.map((signal) => (
            <TechnicalBadge key={signal} label={signal} />
          ))}
        </div>
      </div>
      <aside className="boot-panel" aria-label="System boot status">
        <div className="boot-panel__title">
          <span>system.boot</span>
          <span>diagnostics</span>
        </div>
        {hero.boot.map((item) => (
          <div key={item.label} className="boot-panel__row">
            <span>{item.label}</span>
            <span>{item.state}</span>
          </div>
        ))}
      </aside>
    </section>
  );
}
