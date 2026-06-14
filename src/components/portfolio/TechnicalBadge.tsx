interface TechnicalBadgeProps {
  label: string;
}

export function TechnicalBadge({ label }: TechnicalBadgeProps) {
  return <span className="technical-badge">{label}</span>;
}
