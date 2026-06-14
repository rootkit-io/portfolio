"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import type { ProjectItem } from "@/lib/portfolio-types";
import { TechnicalBadge } from "./TechnicalBadge";

interface ProjectDossierModalProps {
  project: ProjectItem;
}

export function ProjectDossierModal({ project }: ProjectDossierModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogId = useId();
  const titleId = useId();
  const descriptionId = useId();

  const closeModal = () => {
    setIsOpen(false);
    requestAnimationFrame(() => {
      triggerRef.current?.focus({ preventScroll: true });
    });
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleDialogKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    ).filter((element) => !element.hasAttribute("disabled"));

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!project.dossier) {
    return null;
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="dossier-trigger"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        onClick={() => setIsOpen(true)}
      >
        <span>View dossier</span>
        <span>{project.name}</span>
      </button>

      {isOpen ? (
        <div className="project-dossier">
          <button
            type="button"
            className="project-dossier__backdrop"
            aria-label={`Close ${project.name} dossier`}
            tabIndex={-1}
            onClick={closeModal}
          />
          <div
            id={dialogId}
            ref={dialogRef}
            className="project-dossier__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            onKeyDown={handleDialogKeyDown}
          >
            <div className="project-dossier__topline">
              <span>technical dossier</span>
              <span>{project.status}</span>
            </div>

            <header className="project-dossier__header">
              <div>
                <p className="project-dossier__eyebrow">{project.type}</p>
                <h2 id={titleId}>{project.name}</h2>
                <p id={descriptionId}>{project.dossier.overview}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="project-dossier__close"
                aria-label={`Close ${project.name} dossier`}
                onClick={closeModal}
              >
                Esc
              </button>
            </header>

            <div className="project-dossier__meta">
              <span>{project.role}</span>
              {project.builtUnder ? <span>Built under {project.builtUnder}</span> : null}
              {project.award ? <span>{project.award}</span> : null}
            </div>

            <div className="project-dossier__sections">
              {project.dossier.sections.map((section) => (
                <section key={section.title} className="project-dossier__section">
                  <h3>{section.title}</h3>
                  {section.body ? <p>{section.body}</p> : null}
                  {section.items?.length ? (
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="project-dossier__stack" aria-label={`${project.name} stack`}>
              {project.stack.map((item) => (
                <TechnicalBadge key={item} label={item} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
