import type { ReactNode } from "react";

interface SystemPanelProps {
  title: string;
  meta?: string;
  variant?: "default" | "flagship" | "runtime" | "dossier" | "tool";
  children: ReactNode;
}

export function SystemPanel({
  title,
  meta,
  variant = "default",
  children,
}: SystemPanelProps) {
  return (
    <article className={`system-panel system-panel--${variant}`}>
      <div className="system-panel__header">
        <h3>{title}</h3>
        {meta ? <span data-status={meta}>{meta}</span> : null}
      </div>
      <div className="system-panel__body">{children}</div>
    </article>
  );
}
