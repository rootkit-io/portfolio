import type { PortfolioData } from "@/lib/portfolio-types";

export const portfolio = {
  hero: {
    headline: "Websites that work as hard as you do.",
    subtitle: "A team of four · Web Development · Web Apps · Technical Partner for Founders",
    cta: "See the work",
  },
  philosophy: {
    text: "Fast, beautiful, reliable. Your website should earn trust the moment it loads — and keep delivering long after. Three of us, one standard.",
    highlight: "Fast, beautiful, reliable",
  },
  projects: [
    {
      id: "lifeadmin",
      title: "LifeAdmin OS",
      role: "Full-Stack Lead · Fintech SaaS",
      description:
        "Subscription intelligence platform — detection, price-change alerts, and recurring payment visibility.",
      status: "in-progress",
      badge: "Live Product",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Auth", "Audit logs"],
      scene: "lifeadmin" as const,
    },
    {
      id: "ghostai",
      title: "GhostAI",
      role: "Full-Stack Contributor · Solana · Privacy",
      description:
        "Private finance product using shielded transaction flows on Solana.",
      status: "archived",
      badge: "Hackathon Prize",
      stack: ["Solana", "Umbra SDK", "Go", "Rust"],
      scene: "ghostai" as const,
    },
    {
      id: "yeetlabs",
      title: "Yeet Labs",
      role: "Backend & DevOps Engineer",
      description:
        "Service reliability, automation, and deployment infrastructure.",
      status: "archived",
      stack: ["Go", "Rust", "Linux", "Docker", "CI/CD"],
      scene: "yeetlabs" as const,
    },
    {
      id: "dripcross",
      title: "Dripcross",
      role: "System Administrator",
      description:
        "Built from scratch — Linux operations, user management, and server infrastructure.",
      status: "archived",
      stack: ["Linux", "Networking", "Shell", "Infrastructure"],
      scene: "dripcross" as const,
    },
  ],
  toolchain: [
    {
      label: "Frontend",
      responsibility: "Interfaces your users actually enjoy",
      tools: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    {
      label: "Backend",
      responsibility: "APIs and services your business runs on",
      tools: ["Go", "TypeScript", "Rust", "Python"],
    },
    {
      label: "Databases",
      responsibility: "Data that stays fast as you grow",
      tools: ["PostgreSQL", "Redis", "Supabase"],
    },
    {
      label: "Auth & Security",
      responsibility: "Your users' data stays safe",
      tools: ["Clerk", "Auth.js", "Supabase Auth", "OWASP"],
    },
    {
      label: "Infrastructure",
      responsibility: "Ships fast, stays up, scales when you do",
      tools: ["Docker", "GitHub Actions", "Cloudflare", "AWS", "Linux"],
    },
    {
      label: "AI & APIs",
      responsibility: "Intelligence baked into your product",
      tools: ["Vercel AI SDK", "OpenAI API"],
    },
  ],
  timeline: [
    {
      company: "LifeAdmin OS",
      role: "Full-Stack Lead",
      period: "Present",
      summary: "Building a fintech subscription intelligence platform from the ground up.",
      focus: [
        "Full-stack architecture",
        "Backend data models",
        "Auth & security",
      ],
    },
    {
      company: "Yeet Labs",
      role: "Backend & DevOps",
      period: "8 months",
      summary: "Built backend systems and deployment infrastructure.",
      focus: [
        "Go & Rust services",
        "Linux systems",
        "Deployment automation",
      ],
    },
    {
      company: "Dripcross",
      role: "System Administrator",
      period: "2 years",
      summary: "Managed Linux servers, user access, and service reliability.",
      focus: [
        "Linux administration",
        "Infrastructure",
        "Service maintenance",
      ],
    },
  ],
  team: [
    {
      name: "Abbas",
      role: "Design & Product",
      description: "Crafts interfaces that feel obvious — every pixel intentional, every flow frictionless.",
    },
    {
      name: "Bobby",
      role: "Full-Stack Engineering",
      description: "Builds the backbone — APIs, infra, auth, and everything that makes it fast and reliable.",
    },
    {
      name: "Lucii",
      role: "Frontend & Experience",
      description: "Turns designs into living interfaces — motion, polish, and the details that define quality.",
    },
    {
      name: "Arisha",
      role: "Design",
      description: "Shapes the visual identity — clean layouts, thoughtful typography, and interfaces that feel right.",
    },
  ],
  contact: {
    cta: "Let's build something worth shipping.",
    links: [
      {
        label: "Email",
        href: "mailto:bobbyoxizo@gmail.com",
        kind: "email" as const,
        ariaLabel: "Send email",
      },
      {
        label: "GitHub",
        href: "https://github.com/rootkit-io",
        kind: "github" as const,
        ariaLabel: "Open GitHub profile",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/aditya-singh-511363381",
        kind: "linkedin" as const,
        ariaLabel: "Open LinkedIn profile",
      },
      {
        label: "Download CV",
        kind: "cv" as const,
        ariaLabel: "Download CV (coming soon)",
        disabled: true,
      },
    ],
  },
} satisfies PortfolioData;
