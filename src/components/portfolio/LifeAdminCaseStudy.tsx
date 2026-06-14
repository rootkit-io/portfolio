import type { LifeAdminCaseStudy as LifeAdminCaseStudyData } from "@/lib/portfolio-types";
import { SectionShell } from "./SectionShell";
import { SystemPanel } from "./SystemPanel";
import { TechnicalBadge } from "./TechnicalBadge";
import { TransactionStream } from "./TransactionStream";

interface LifeAdminCaseStudyProps {
  caseStudy: LifeAdminCaseStudyData;
}

export function LifeAdminCaseStudy({ caseStudy }: LifeAdminCaseStudyProps) {
  return (
    <SectionShell
      eyebrow="/lifeadmin-os"
      title={caseStudy.title}
      description={caseStudy.summary}
      className="section-shell--flagship"
    >
      <div className="panel-grid panel-grid--two">
        <SystemPanel title="Context" meta={caseStudy.role} variant="flagship">
          <p>{caseStudy.context}</p>
        </SystemPanel>
        <SystemPanel title="Problem" meta={caseStudy.status} variant="flagship">
          <p>{caseStudy.problem}</p>
        </SystemPanel>
      </div>
      <SystemPanel title="Pipeline" variant="flagship">
        <ol className="pipeline-list">
          {caseStudy.pipeline.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </SystemPanel>
      <TransactionStream
        label={caseStudy.streamLabel}
        rows={caseStudy.streamRows}
      />
      <div className="panel-grid panel-grid--two">
        <SystemPanel title="Architecture Focus" variant="flagship">
          <ul>
            {caseStudy.architectureFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SystemPanel>
        <SystemPanel title="Security / Product Concerns" variant="flagship">
          <ul>
            {caseStudy.securityConcerns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SystemPanel>
      </div>
      <SystemPanel title="Approach" variant="flagship">
        <ul>
          {caseStudy.approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SystemPanel>
      <SystemPanel title="Expected Outcomes" variant="flagship">
        <ul>
          {caseStudy.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SystemPanel>
      <div className="badge-row">
        {caseStudy.stack.map((item) => (
          <TechnicalBadge key={item} label={item} />
        ))}
      </div>
    </SectionShell>
  );
}
