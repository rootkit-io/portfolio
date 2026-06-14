export type LinkKind = "email" | "github" | "linkedin" | "external" | "cv";
export type ProjectStatus = "live" | "in-progress" | "archived" | "planned";

export interface HeroData {
  headline: string;
  subtitle: string;
  cta: string;
}

export interface PhilosophyData {
  text: string;
  /** The word/phrase within `text` to underline with a glowing accent */
  highlight: string;
}

export interface ProjectData {
  id: string;
  title: string;
  role: string;
  description: string;
  status: ProjectStatus;
  badge?: string;
  stack: string[];
  scene: 'lifeadmin' | 'ghostai' | 'yeetlabs' | 'dripcross';
}

export interface ToolchainGroup {
  label: string;
  responsibility: string;
  tools: string[];
}

export interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  /** 4–8 word summary of the role */
  summary: string;
  focus: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface ContactLink {
  label: string;
  href?: string;
  kind: LinkKind;
  ariaLabel?: string;
  disabled?: boolean;
}

export interface ContactData {
  cta: string;
  links: ContactLink[];
}

export interface PortfolioData {
  hero: HeroData;
  philosophy: PhilosophyData;
  projects: ProjectData[];
  toolchain: ToolchainGroup[];
  timeline: TimelineEntry[];
  team: TeamMember[];
  contact: ContactData;
}
