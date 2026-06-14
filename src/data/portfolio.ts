import type { PortfolioData } from "@/lib/portfolio-types";

export const portfolio = {
  hero: {
    name: "Aditya Singh",
    title: "Full-Stack Engineer · Product Engineer · Founding Engineer",
    location: "Barcelona, Spain",
    positioning:
      "Backend-leaning full-stack engineer building SaaS systems across frontend, backend APIs, databases, auth, Linux infrastructure, DevOps workflows, and security-minded architecture.",
    summary:
      "CTO & Co-Founder at LifeAdmin OS, building a fintech product for subscription detection, price-change alerts, and recurring payment visibility.",
    signals: [
      "SaaS architecture",
      "Backend APIs",
      "Auth boundaries",
      "Linux infrastructure",
      "Security-minded delivery",
    ],
    boot: [
      { label: "identity.service", state: "online" },
      { label: "project.registry", state: "online" },
      { label: "lifeadmin.engine", state: "active" },
      { label: "security.policy", state: "loaded" },
      { label: "contact.gateway", state: "listening" },
    ],
  },
  commands: [
    {
      id: "open-identity",
      label: "Open /identity",
      targetId: "identity",
      description: "Jump to the technical identity console.",
    },
    {
      id: "inspect-architecture",
      label: "Inspect /architecture",
      targetId: "architecture",
      description: "Review connected engineering domains.",
    },
    {
      id: "open-lifeadmin",
      label: "Open /lifeadmin-os",
      targetId: "lifeadmin-os",
      description: "Open the flagship fintech case study.",
    },
    {
      id: "view-runtime-history",
      label: "View /runtime-history",
      targetId: "runtime-history",
      description: "Scan production and operations history.",
    },
    {
      id: "browse-project-registry",
      label: "Browse /project-registry",
      targetId: "project-registry",
      description: "Browse project dossiers and evidence.",
    },
    {
      id: "inspect-toolchain",
      label: "Inspect /toolchain",
      targetId: "toolchain",
      description: "Inspect tools grouped by responsibility.",
    },
    {
      id: "view-education",
      label: "View /education",
      targetId: "education",
      description: "View cybersecurity education context.",
    },
    {
      id: "open-contact-gateway",
      label: "Open /contact-gateway",
      targetId: "contact-gateway",
      description: "Jump to email, GitHub, LinkedIn, and CV status.",
    },
  ],
  systemMap: {
    summary:
      "Technical domains represented as operating panels: each one ties tools to evidence, constraints, and production habits.",
    nodes: [
      {
        id: "product-frontend",
        label: "Product Frontend",
        status: "primary",
        description:
          "Builds clear SaaS interfaces that make technical state legible to users and operators.",
        evidence: [
          "Dashboard views for subscription visibility and payment history.",
          "Frontend plans shaped around narrow V1 workflows and low-friction review.",
        ],
        tags: ["Next.js", "React", "TypeScript"],
      },
      {
        id: "backend-apis",
        label: "Backend APIs",
        status: "primary",
        description:
          "Designs service boundaries around ownership, ingestion, detection, and internal operations.",
        evidence: [
          "LifeAdmin OS API planning for transaction ingestion, subscription candidates, alerts, and admin/debug visibility.",
          "Backend and DevOps responsibilities across Linux-based service environments at Yeet Labs.",
        ],
        tags: ["REST", "OpenAPI", "BFF layers"],
      },
      {
        id: "data-models",
        label: "Data Models",
        status: "primary",
        description:
          "Models product behavior first, then maps it into maintainable database structures.",
        evidence: [
          "Transaction-heavy schema thinking for merchants, aliases, recurring patterns, subscriptions, payment history, and price events.",
          "Audit-log and import-job concepts kept in the core architecture from the start.",
        ],
        tags: ["PostgreSQL", "Redis", "pgvector"],
      },
      {
        id: "auth-authorization",
        label: "Auth & Authorization",
        status: "primary",
        description:
          "Treats user ownership and authorization boundaries as product architecture, not late-stage middleware.",
        evidence: [
          "Secure ownership planning for fintech subscription records and dashboard access.",
          "Open-banking readiness framed around data privacy, auditability, and production-safe defaults.",
        ],
        tags: ["Clerk", "Auth.js", "Keycloak"],
      },
      {
        id: "devops-linux",
        label: "DevOps / Linux",
        status: "supporting",
        description:
          "Comfortable inside Linux systems, deployment environments, logs, service processes, and operational hygiene.",
        evidence: [
          "Backend and DevOps work at Yeet Labs across automation, troubleshooting, deployment support, and reliability.",
          "Two years as Junior System Administrator handling users, permissions, package updates, services, and access management.",
        ],
        tags: ["Linux", "Docker", "GitHub Actions"],
      },
      {
        id: "security",
        label: "Security",
        status: "primary",
        description:
          "Security-minded architecture focused on defaults, boundaries, secrets, logs, and audit trails.",
        evidence: [
          "LifeAdmin OS planning includes authorization boundaries, audit logs, privacy, and production-safe defaults.",
          "Cybersecurity studies at Harbour.Space University reinforce secure coding and operational thinking.",
        ],
        tags: ["OWASP API Top 10", "Access control", "Audit logs"],
      },
      {
        id: "testing",
        label: "Testing",
        status: "supporting",
        description:
          "Uses tests as confidence tools for APIs, contracts, and product workflows.",
        evidence: [
          "Plans for API integration and contract tests around ingestion, detection, alerts, and ownership boundaries.",
          "Frontend confidence path through Playwright for critical dashboard workflows.",
        ],
        tags: ["Vitest", "Playwright", "Contract tests"],
      },
      {
        id: "ai-systems",
        label: "AI Systems",
        status: "supporting",
        description:
          "Uses AI where it fits product systems, especially service orchestration and data-heavy workflows.",
        evidence: [
          "Python reserved for AI-heavy services where the ecosystem is strongest.",
          "Vercel AI SDK and OpenAI Responses API tracked as practical integration tools.",
        ],
        tags: ["Vercel AI SDK", "OpenAI Responses API", "Python"],
      },
      {
        id: "product-architecture",
        label: "Product Architecture",
        status: "primary",
        description:
          "Keeps V1 narrow, shippable, and observable while preserving future system expansion paths.",
        evidence: [
          "LifeAdmin OS roadmap centers on subscription detection, price-change alerts, recurring payment visibility, and admin/debug insight.",
          "Founder-style tradeoffs: reduce scope, protect core data model, and ship clear user value.",
        ],
        tags: ["SaaS V1", "Fintech", "Product systems"],
      },
    ],
    links: [
      { from: "raw data", to: "product UI", label: "make state visible" },
      { from: "auth", to: "data ownership", label: "protect boundaries" },
      { from: "logs", to: "debug views", label: "shorten feedback loops" },
    ],
  },
  lifeAdmin: {
    title: "LifeAdmin OS — Fintech Subscription Intelligence Platform",
    slug: "lifeadmin-os",
    role: "CTO & Co-Founder",
    status: "in-progress",
    summary:
      "A fintech SaaS product for detecting subscriptions from bank transactions, alerting users to price increases, and reducing forgotten recurring payments.",
    context:
      "Building the product and technical architecture for a focused V1 across accounts, transaction ingestion, subscription detection, alerts, dashboard views, and operator visibility.",
    problem:
      "Recurring payments are often invisible until money leaves the account. Users need a trustworthy system that turns transaction history into clear subscription records and change alerts.",
    architectureFocus: [
      "user accounts",
      "bank transaction ingestion",
      "subscription detection",
      "merchant normalization",
      "detection candidates",
      "payment history",
      "price events",
      "alerts",
      "dashboard views",
      "admin/debug visibility",
      "audit logs",
      "import jobs",
    ],
    securityConcerns: [
      "secure user ownership",
      "authorization boundaries",
      "open-banking readiness",
      "data privacy",
      "auditability",
      "production-safe defaults",
      "keeping V1 narrow and shippable",
    ],
    pipeline: [
      "raw transaction",
      "merchant alias",
      "recurring pattern",
      "subscription candidate",
      "confirmed subscription",
      "price event",
      "alert",
    ],
    streamLabel:
      "Simulated V1 detection stream — sample signal flow, no live banking data.",
    streamRows: [
      {
        time: "09:14",
        signal: "Spotify ES",
        amount: "€10.99",
        stage: "merchant normalized",
        status: "normalized",
      },
      {
        time: "09:16",
        signal: "Netflix",
        amount: "€15.99",
        stage: "recurring pattern detected",
        status: "candidate",
      },
      {
        time: "09:18",
        signal: "Adobe Creative Cloud",
        amount: "€36.29",
        stage: "subscription confirmed",
        status: "confirmed",
      },
      {
        time: "09:20",
        signal: "Apple iCloud",
        amount: "€2.99",
        stage: "payment history updated",
        status: "ingested",
      },
      {
        time: "09:23",
        signal: "Notion",
        amount: "€9.50 -> €11.50",
        stage: "price change detected",
        status: "price_change",
      },
      {
        time: "09:25",
        signal: "Gym Membership",
        amount: "€39.99",
        stage: "renewal alert queued",
        status: "alert_ready",
      },
      {
        time: "09:27",
        signal: "Vercel Pro",
        amount: "€20.00",
        stage: "merchant alias linked",
        status: "normalized",
      },
    ],
    approach: [
      "Keep the first release centered on recurring payment visibility rather than a broad personal finance suite.",
      "Separate raw imported bank records from normalized merchants, candidate detections, confirmed subscriptions, and alertable events.",
      "Design admin/debug views early so detection quality can be inspected without unsafe database spelunking.",
      "Treat privacy, ownership, and auditability as product requirements from the start.",
    ],
    outcomes: [
      "Focused V1 architecture for subscription intelligence.",
      "Data model that can explain why a subscription candidate exists.",
      "Clear path from transaction ingestion to alerting without overbuilding the first product surface.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Auth",
      "Open banking readiness",
      "Audit logs",
    ],
  },
  experience: [
    {
      company: "LifeAdmin OS",
      role: "CTO & Co-Founder",
      location: "Barcelona, Spain",
      period: "Present",
      summary:
        "Leading product and technical architecture for a fintech SaaS V1 focused on subscription detection, price-change alerts, and recurring payment visibility.",
      focus: [
        "product and technical architecture",
        "fintech SaaS V1 planning",
        "backend data models",
        "transaction ingestion",
        "subscription detection",
        "price events",
        "alerts",
        "dashboard views",
        "admin/debug visibility",
        "secure auth and authorization planning",
        "open-banking readiness",
      ],
      systems: ["Fintech SaaS", "Data modeling", "Auth planning", "Alerts"],
    },
    {
      company: "Yeet Labs",
      role: "Backend & DevOps Engineer",
      location: "Remote",
      period: "8 months",
      summary:
        "Worked across backend and DevOps responsibilities for Linux-based systems, service reliability, automation, troubleshooting, and deployment support.",
      focus: [
        "backend and DevOps responsibilities",
        "Linux-based systems",
        "service reliability",
        "automation",
        "troubleshooting",
        "deployment support",
        "Go, Rust, Bash, Linux tooling",
        "logs",
        "environment configuration",
        "maintainability",
        "server processes",
        "service debugging",
        "deployment workflows",
        "reliability",
      ],
      systems: ["Go", "Rust", "Bash", "Linux", "Logs", "Deployments"],
      note: "Contributed as part of the Yeet Labs engineering team to GhostAI, a Solana-focused private finance product using Umbra SDK for shielded transaction flows.",
      award:
        "GhostAI was a hackathon product that placed 3rd in Umbra's Colosseum Frontier Hackathon sidetrack, earning the Umbra sidetrack prize 3rd place.",
    },
    {
      company: "Dripcross.com",
      role: "Junior System Administrator",
      location: "Remote",
      period: "2 years",
      summary:
        "Supported Linux administration and operational hygiene across users, permissions, services, package updates, troubleshooting, and access management.",
      focus: [
        "Linux administration",
        "users, permissions, services",
        "package updates",
        "basic hardening",
        "troubleshooting",
        "access management",
        "server hygiene",
        "operational documentation",
        "Linux",
        "networking basics",
        "shell usage",
        "deployment environments",
        "debugging",
      ],
      systems: ["Linux", "Networking basics", "Shell", "Services", "Access"],
    },
  ],
  projects: [
    {
      name: "LifeAdmin OS",
      type: "Fintech SaaS / Subscription Intelligence",
      role: "CTO & Co-Founder",
      status: "in-progress",
      summary:
        "A subscription intelligence product for recurring subscription detection, price-change alerts, and transaction-heavy financial visibility.",
      evidence: [
        "Recurring subscription detection and price-change alerts.",
        "Transaction-heavy data model with PostgreSQL schema thinking.",
        "Secure user ownership, authorization boundaries, audit logs, and focused V1 architecture.",
      ],
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Auth", "Audit logs"],
      dossier: {
        overview:
          "LifeAdmin OS is a fintech subscription intelligence platform focused on detecting recurring payments, explaining subscription candidates, and alerting users to price changes.",
        sections: [
          {
            title: "Role",
            body: "CTO & Co-Founder responsible for shaping the product architecture, V1 technical scope, backend data model, dashboard surfaces, and security-minded implementation plan.",
          },
          {
            title: "Architecture Focus",
            items: [
              "user accounts",
              "bank transaction ingestion",
              "subscription detection",
              "merchant normalization",
              "detection candidates",
              "payment history",
              "price events",
              "alerts",
              "dashboard views",
              "admin/debug visibility",
              "audit logs",
              "import jobs",
            ],
          },
          {
            title: "Data Model Concerns",
            items: [
              "transactions",
              "bank connections",
              "merchant aliases",
              "subscription detection candidates",
              "subscription payment history",
              "price events",
              "alerts",
              "audit logs",
              "import jobs",
            ],
          },
          {
            title: "Security Concerns",
            items: [
              "secure user ownership",
              "authorization boundaries",
              "open-banking readiness",
              "data privacy",
              "auditability",
              "production-safe defaults",
            ],
          },
          {
            title: "V1 Tradeoffs",
            items: [
              "keep detection focused and explainable",
              "avoid overbuilding AI features early",
              "prioritize data correctness and trust",
              "keep admin/debug visibility simple",
            ],
          },
          {
            title: "Production Risks",
            items: [
              "incorrect merchant normalization can create false positives",
              "price events need explainable history to earn user trust",
              "bank data import jobs need retry visibility and audit trails",
              "authorization mistakes would be severe in a fintech context",
            ],
          },
          {
            title: "What This Project Demonstrates",
            items: [
              "backend-first product architecture",
              "transaction-heavy schema thinking",
              "security and privacy awareness",
              "V1 scope control",
              "operator visibility through admin/debug tooling",
            ],
          },
        ],
      },
    },
    {
      name: "GhostAI",
      type: "Private Financial Tools for Solana",
      role: "Engineering contributor under Yeet Labs",
      status: "archived",
      summary:
        "Solana-focused private finance product using Umbra SDK for shielded transaction flows.",
      evidence: [
        "Contributed through backend, DevOps, Linux, and infrastructure-oriented workflows as part of the Yeet Labs engineering team.",
        "Supported deployment workflows, logs, environment configuration, and reliability work.",
        "Hackathon product that placed 3rd in Umbra's Colosseum Frontier Hackathon sidetrack.",
      ],
      stack: ["Solana", "Umbra SDK", "Go", "Rust", "Bash", "Linux"],
      builtUnder: "Yeet Labs",
      award: "Umbra sidetrack prize 3rd place",
      dossier: {
        overview:
          "GhostAI is a Solana-focused private finance product using Umbra SDK for shielded transaction flows, built under Yeet Labs.",
        sections: [
          {
            title: "Role / Contribution Boundary",
            body: "Contributed as part of the Yeet Labs engineering team to GhostAI, a Solana-focused private finance product using Umbra SDK for shielded transaction flows.",
          },
          {
            title: "Technical Context",
            items: [
              "built under Yeet Labs",
              "Solana-focused private finance product",
              "Umbra SDK for shielded transaction flows",
              "hackathon product",
            ],
          },
          {
            title: "Infrastructure / DevOps Focus",
            items: [
              "backend/DevOps/Linux/infrastructure-oriented workflows",
              "deployment support",
              "logs",
              "environment configuration",
              "server process maintainability",
            ],
          },
          {
            title: "Reliability Concerns",
            items: [
              "deployment workflow consistency",
              "environment configuration clarity",
              "log visibility for debugging",
              "Linux-based service reliability",
            ],
          },
          {
            title: "Hackathon Result",
            body: "GhostAI placed 3rd in Umbra's Colosseum Frontier Hackathon sidetrack and received the Umbra sidetrack prize 3rd place.",
          },
          {
            title: "What This Project Demonstrates",
            items: [
              "careful contribution boundaries",
              "private finance product exposure",
              "Solana and Umbra SDK context",
              "backend and infrastructure support",
              "hackathon execution under time constraints",
            ],
          },
        ],
      },
      links: [
        {
          label: "Project link",
          href: "https://x.com/ghostai_fi",
          ariaLabel: "Open GhostAI project profile on X",
        },
      ],
    },
  ],
  toolchain: [
    {
      label: "Frontend",
      responsibility: "Product interfaces and dashboard workflows",
      tools: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Radix UI",
        "TanStack ecosystem",
      ],
    },
    {
      label: "Backend",
      responsibility: "APIs, BFF layers, services, and system boundaries",
      tools: [
        "Go",
        "TypeScript",
        "Rust",
        "backend/BFF layers",
        "Python for AI-heavy services",
      ],
    },
    {
      label: "Databases",
      responsibility: "Relational models, vector search, and fast state",
      tools: ["PostgreSQL", "pgvector", "Redis"],
    },
    {
      label: "APIs",
      responsibility: "External contracts, internal workflows, and job events",
      tools: ["REST", "OpenAPI", "event-driven jobs", "WebSockets", "internal gRPC"],
    },
    {
      label: "Auth",
      responsibility: "Identity, access control, and fintech authorization planning",
      tools: [
        "Clerk",
        "Auth.js",
        "Supabase Auth",
        "Keycloak for enterprise/fintech scenarios",
      ],
    },
    {
      label: "Infrastructure",
      responsibility: "Deployments, Linux operations, and delivery automation",
      tools: ["Docker", "GitHub Actions", "Cloudflare", "AWS", "Linux"],
    },
    {
      label: "AI",
      responsibility: "AI-powered services and product integrations",
      tools: ["Vercel AI SDK", "OpenAI Responses API"],
    },
    {
      label: "Testing",
      responsibility: "Workflow confidence across UI, APIs, and service contracts",
      tools: [
        "Vitest",
        "Playwright",
        "API integration tests",
        "contract tests",
      ],
    },
    {
      label: "Security",
      responsibility: "Secure defaults, API boundaries, and operational hygiene",
      tools: [
        "OWASP API Top 10",
        "secure coding",
        "secrets hygiene",
        "access control",
        "rate limiting",
        "audit logs",
      ],
    },
  ],
  education: [
    {
      institution: "Harbour.Space University",
      credential: "Cybersecurity student",
      location: "Barcelona, Spain",
      period: "In progress",
      focus: [
        "Cybersecurity foundations",
        "Secure architecture",
        "Systems and network thinking",
      ],
    },
  ],
  contact: {
    cta: "Available for full-stack, backend-leaning, product engineering, and founding engineer roles.",
    links: [
      {
        label: "Email",
        href: "mailto:bobbyoxizo@gmail.com",
        kind: "email",
        ariaLabel: "Email Aditya Singh",
      },
      {
        label: "GitHub",
        href: "https://github.com/rootkit-io",
        kind: "github",
        ariaLabel: "Open Aditya Singh's GitHub profile",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/aditya-singh-511363381",
        kind: "linkedin",
        ariaLabel: "Open Aditya Singh's LinkedIn profile",
      },
      {
        label: "Download CV",
        kind: "cv",
        ariaLabel: "Download CV unavailable. PDF not added yet.",
        disabled: true,
      },
    ],
  },
} satisfies PortfolioData;
