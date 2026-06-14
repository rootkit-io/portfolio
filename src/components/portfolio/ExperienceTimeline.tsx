import type { ExperienceItem } from "@/lib/portfolio-types";
import { SectionShell } from "./SectionShell";
import { SystemPanel } from "./SystemPanel";
import { TechnicalBadge } from "./TechnicalBadge";

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <SectionShell
      eyebrow="/runtime-history"
      title="Timeline of production systems"
      description="Technical runtime history across product architecture, backend systems, DevOps workflows, and Linux operations."
    >
      <div className="stack-list runtime-list">
        {experience.map((item) => (
          <SystemPanel
            key={`${item.company}-${item.role}`}
            title={item.role}
            meta={item.period}
            variant="runtime"
          >
            <p className="muted-line">
              {item.company} · {item.location}
            </p>
            <p>{item.summary}</p>
            <ul>
              {item.focus.map((focus) => (
                <li key={focus}>{focus}</li>
              ))}
            </ul>
            {item.note ? <p>{item.note}</p> : null}
            {item.award ? <p className="award-line">{item.award}</p> : null}
            <div className="badge-row">
              {item.systems.map((system) => (
                <TechnicalBadge key={system} label={system} />
              ))}
            </div>
          </SystemPanel>
        ))}
      </div>
    </SectionShell>
  );
}
