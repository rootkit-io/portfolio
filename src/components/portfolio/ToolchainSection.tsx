import type { ToolchainGroup } from "@/lib/portfolio-types";
import { SectionShell } from "./SectionShell";
import { SystemPanel } from "./SystemPanel";
import { TechnicalBadge } from "./TechnicalBadge";

interface ToolchainSectionProps {
  toolchain: ToolchainGroup[];
}

export function ToolchainSection({ toolchain }: ToolchainSectionProps) {
  return (
    <SectionShell
      eyebrow="/toolchain"
      title="Working stack"
      description="Grouped tools for backend, frontend, and delivery habits."
    >
      <div className="panel-grid toolchain-grid">
        {toolchain.map((group) => (
          <SystemPanel key={group.label} title={group.label} variant="tool">
            <p>{group.responsibility}</p>
            <div className="badge-row">
              {group.tools.map((tool) => (
                <TechnicalBadge key={tool} label={tool} />
              ))}
            </div>
          </SystemPanel>
        ))}
      </div>
    </SectionShell>
  );
}
