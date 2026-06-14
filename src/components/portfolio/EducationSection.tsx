import type { EducationItem } from "@/lib/portfolio-types";
import { SectionShell } from "./SectionShell";
import { SystemPanel } from "./SystemPanel";

interface EducationSectionProps {
  education: EducationItem[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <SectionShell
      eyebrow="/education"
      title="Training and foundations"
      description="Education records stay separate from work and project proof."
    >
      <div className="stack-list">
        {education.map((item) => (
          <SystemPanel
            key={`${item.institution}-${item.credential}`}
            title={item.credential}
            meta={item.period}
          >
            <p className="muted-line">
              {item.institution} · {item.location}
            </p>
            <ul>
              {item.focus.map((focus) => (
                <li key={focus}>{focus}</li>
              ))}
            </ul>
          </SystemPanel>
        ))}
      </div>
    </SectionShell>
  );
}
