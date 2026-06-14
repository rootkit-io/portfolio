import { HeroSection } from '@/components/sections/HeroSection';
import { BuildPhilosophy } from '@/components/sections/BuildPhilosophy';
import { ProjectSection } from '@/components/sections/ProjectSection';
import { ToolchainSection } from '@/components/sections/ToolchainSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactGateway } from '@/components/sections/ContactGateway';
import { portfolio } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="portfolio-page">
      <HeroSection />
      
      <BuildPhilosophy />

      <div id="projects">
        {portfolio.projects.map((project, index) => (
          <ProjectSection
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      <ToolchainSection />
      
      <TimelineSection />
      
      <TeamSection />
      
      <ContactGateway />
    </main>
  );
}
