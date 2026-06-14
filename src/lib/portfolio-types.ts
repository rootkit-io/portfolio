export type LinkKind = "email" | "github" | "linkedin" | "external" | "cv";

export type ProjectStatus = "live" | "in-progress" | "archived" | "planned";

export type SystemNodeStatus = "primary" | "supporting" | "planned";

export interface BootSignal {
  label: string;
  state: string;
}

export interface HeroIdentity {
  name: string;
  title: string;
  location: string;
  positioning: string;
  summary: string;
  signals: string[];
  boot: BootSignal[];
}

export interface SystemMapNode {
  id: string;
  label: string;
  status: SystemNodeStatus;
  description: string;
  evidence: string[];
  tags: string[];
}

export interface SystemMapLink {
  from: string;
  to: string;
  label: string;
}

export interface SystemMap {
  summary: string;
  nodes: SystemMapNode[];
  links: SystemMapLink[];
}

export type LifeAdminStreamStatus =
  | "ingested"
  | "normalized"
  | "candidate"
  | "confirmed"
  | "price_change"
  | "alert_ready";

export interface LifeAdminStreamRow {
  time: string;
  signal: string;
  amount: string;
  stage: string;
  status: LifeAdminStreamStatus;
}

export interface LifeAdminCaseStudy {
  title: string;
  slug: string;
  role: string;
  status: ProjectStatus;
  summary: string;
  context: string;
  problem: string;
  architectureFocus: string[];
  securityConcerns: string[];
  pipeline: string[];
  streamLabel: string;
  streamRows: LifeAdminStreamRow[];
  approach: string[];
  outcomes: string[];
  stack: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  focus: string[];
  systems: string[];
  note?: string;
  award?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface ProjectDossierSection {
  title: string;
  body?: string;
  items?: string[];
}

export interface ProjectDossier {
  overview: string;
  sections: ProjectDossierSection[];
}

export interface ProjectItem {
  name: string;
  type: string;
  role: string;
  status: ProjectStatus;
  summary: string;
  evidence: string[];
  stack: string[];
  dossier?: ProjectDossier;
  builtUnder?: string;
  award?: string;
  links?: ProjectLink[];
}

export interface ToolchainGroup {
  label: string;
  responsibility: string;
  tools: string[];
}

export interface EducationItem {
  institution: string;
  credential: string;
  location: string;
  period: string;
  focus: string[];
}

export interface ContactLink {
  label: string;
  href?: string;
  kind: LinkKind;
  ariaLabel?: string;
  disabled?: boolean;
}

export interface ContactGatewayData {
  cta: string;
  links: ContactLink[];
}

export interface CommandItem {
  id: string;
  label: string;
  targetId: string;
  description: string;
}

export interface PortfolioData {
  hero: HeroIdentity;
  commands: CommandItem[];
  systemMap: SystemMap;
  lifeAdmin: LifeAdminCaseStudy;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  toolchain: ToolchainGroup[];
  education: EducationItem[];
  contact: ContactGatewayData;
}
