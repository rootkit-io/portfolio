import type { ProjectItem } from "@/lib/portfolio-types";
import { SectionShell } from "./SectionShell";
import { SystemPanel } from "./SystemPanel";
import { TechnicalBadge } from "./TechnicalBadge";
import { ProjectDossierModal } from "./ProjectDossierModal";

interface ProjectRegistryProps {
  projects: ProjectItem[];
}

export function ProjectRegistry({ projects }: ProjectRegistryProps) {
  return (
    <SectionShell
      eyebrow="/project-registry"
      title="Project records"
      description="Static registry shape for selected work, status, stack, and proof links."
    >
      <div className="panel-grid dossier-grid">
        {projects.map((project) => (
          <SystemPanel
            key={project.name}
            title={project.name}
            meta={project.status}
            variant="dossier"
          >
            <p className="muted-line">
              {project.type} · {project.role}
            </p>
            {project.builtUnder ? (
              <p className="muted-line">Built under {project.builtUnder}</p>
            ) : null}
            <p>{project.summary}</p>
            <ul>
              {project.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.award ? <p className="award-line">{project.award}</p> : null}
            <ProjectDossierModal project={project} />
            {project.links?.length ? (
              <div className="text-link-row">
                {project.links.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      aria-label={link.ariaLabel ?? link.label}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            ) : null}
            <div className="badge-row">
              {project.stack.map((item) => (
                <TechnicalBadge key={item} label={item} />
              ))}
            </div>
          </SystemPanel>
        ))}
      </div>
    </SectionShell>
  );
}
