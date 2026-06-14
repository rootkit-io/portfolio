import { ContactGateway } from "@/components/portfolio/ContactGateway";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { LifeAdminCaseStudy } from "@/components/portfolio/LifeAdminCaseStudy";
import { ProjectRegistry } from "@/components/portfolio/ProjectRegistry";
import { SystemMapSection } from "@/components/portfolio/SystemMapSection";
import { ToolchainSection } from "@/components/portfolio/ToolchainSection";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="portfolio-page">
      <CommandPalette commands={portfolio.commands} />
      <HeroSection hero={portfolio.hero} />
      <SystemMapSection systemMap={portfolio.systemMap} />
      <LifeAdminCaseStudy caseStudy={portfolio.lifeAdmin} />
      <ExperienceTimeline experience={portfolio.experience} />
      <ProjectRegistry projects={portfolio.projects} />
      <ToolchainSection toolchain={portfolio.toolchain} />
      <EducationSection education={portfolio.education} />
      <ContactGateway contact={portfolio.contact} />
    </main>
  );
}
