import type { ReactNode } from "react";

interface SectionShellProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function SectionShell({
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionShellProps) {
  const titleSlug = eyebrow
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const titleId = `${titleSlug}-title`;
  const sectionClassName = className
    ? `section-shell ${className}`
    : "section-shell";

  return (
    <section
      id={titleSlug}
      className={sectionClassName}
      aria-labelledby={titleId}
    >
      <div className="section-shell__header">
        <p className="section-shell__eyebrow">{eyebrow}</p>
        <h2 id={titleId} className="section-shell__title">
          {title}
        </h2>
        {description ? (
          <p className="section-shell__description">{description}</p>
        ) : null}
      </div>
      <div className="section-shell__body">{children}</div>
    </section>
  );
}
