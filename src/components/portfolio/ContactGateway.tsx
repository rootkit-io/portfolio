import type { ContactGatewayData } from "@/lib/portfolio-types";
import { SectionShell } from "./SectionShell";

interface ContactGatewayProps {
  contact: ContactGatewayData;
}

export function ContactGateway({ contact }: ContactGatewayProps) {
  return (
    <SectionShell
      eyebrow="/contact-gateway"
      title="Contact links"
      description={contact.cta}
    >
      <nav className="contact-row" aria-label="Contact links">
        {contact.links.map((link) => {
          const isExternal = link.href?.startsWith("http") ?? false;

          return link.disabled || !link.href ? (
            <span
              key={link.label}
              className="contact-link contact-link--disabled"
              aria-disabled="true"
              aria-label={link.ariaLabel ?? `${link.label} unavailable`}
            >
              <span>{link.label}</span>
              <span className="contact-link__kind">{link.kind}</span>
              <span className="sr-only">PDF not added yet.</span>
            </span>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className="contact-link"
              aria-label={link.ariaLabel ?? link.label}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              <span>{link.label}</span>
              <span className="contact-link__kind">{link.kind}</span>
            </a>
          );
        })}
      </nav>
    </SectionShell>
  );
}
