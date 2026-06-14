import type { SystemMap } from "@/lib/portfolio-types";
import { SectionShell } from "./SectionShell";
import { SystemPanel } from "./SystemPanel";
import { TechnicalBadge } from "./TechnicalBadge";

interface SystemMapSectionProps {
  systemMap: SystemMap;
}

export function SystemMapSection({ systemMap }: SystemMapSectionProps) {
  return (
    <SectionShell
      eyebrow="/architecture"
      title="Portfolio narrative as connected systems"
      description={systemMap.summary}
    >
      <div className="panel-grid system-map-grid">
        {systemMap.nodes.map((node) => (
          <SystemPanel key={node.id} title={node.label} meta={node.status}>
            <p>{node.description}</p>
            <ul>
              {node.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="badge-row">
              {node.tags.map((tag) => (
                <TechnicalBadge key={tag} label={tag} />
              ))}
            </div>
          </SystemPanel>
        ))}
      </div>
      <ul className="link-list architecture-links" aria-label="System map links">
        {systemMap.links.map((link) => (
          <li key={`${link.from}-${link.to}`}>
            <span>{link.from}</span>
            <span>{link.label}</span>
            <span>{link.to}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
