<context>
You are inside an existing Next.js portfolio project at /Users/Daksh/Projects/portfolio. The project already has:
- package.json with next, react, framer-motion, react-three-fiber, drei, three, lenis
- src/app/page.tsx with 6 section imports (HeroSection, BuildPhilosophy, ProjectSection, ToolchainSection, TimelineSection, ContactGateway)
- src/app/layout.tsx with Space Grotesk + Inter fonts, SmoothScrollProvider
- src/app/globals.css with a full design system (deep violet + amber palette, glass panels, tool pills, badges, timeline, contact styles)
- src/data/portfolio.ts with all content data
- src/components/sections/ with all 6 section components (currently use Three.js 3D scenes)
- src/components/three/ with 6 Three.js files (HeroSculpture, LifeAdminNetwork, GhostAITorus, YeetLabsWireframe, DripcrossRings, ParticleBackground)
- src/components/ui/ with TextReveal and ScrollIndicator
- src/components/providers/SmoothScrollProvider with Lenis
- src/lib/hooks/ with useMousePosition, useSectionProgress
- Existing color scheme: var(--color-bg-deep): #0A0612, --color-bg: #1A0A2E, --color-bg-elevated: #2D1B4E, --color-accent: #F59E0B, --color-accent-soft: #E8D5B7, --color-text: #E8E0F0, etc.

The build command is: npm run build
The dev command is: npm run dev
</context>

<task>Strip out ALL Three.js code and rebuild every section using Animate UI components + Framer Motion + CSS animations. The portfolio must feel premium, Apple-like, hand-crafted — NOT vibe coded. Smooth scroll with Lenis stays.</task>

<components_to_install>
Run: pnpm dlx shadcn@latest init (if not done)
Then add these Animate UI components via CLI or manual install:
- @animate-ui/primitives-effects-tilt
- @animate-ui/primitives-effects-magnetic
- @animate-ui/primitives-texts-splitting
- @animate-ui/primitives-texts-rolling
- @animate-ui/primitives-texts-gradient
- @animate-ui/primitives-texts-shimmering
- @animate-ui/primitives-texts-highlight
- @animate-ui/components-backgrounds-gravity-stars
- @animate-ui/components-backgrounds-gradient
- @animate-ui/components-backgrounds-stars
- @animate-ui/components-animate-cursor
- @animate-ui/components-buttons-liquid

Or use: npx shadcn@latest add <component-path>

Import pattern: import { SplittingText } from '@/components/animate-ui/primitives/texts/splitting';
</components_to_install>

<files_to_delete>
- src/components/three/ (entire folder, all 6 files)
- src/lib/hooks/useMousePosition.ts (no longer needed for 3D mouse tracking)
- src/lib/shaders/ (if exists)
</files_to_delete>

<files_to_modify>
1. src/app/page.tsx — remove ParticleBackground dynamic import, remove useScroll import for 3D
2. src/app/layout.tsx — wrap with CursorProvider from animate-ui
3. src/app/globals.css — keep the design system, add new animation keyframes, remove canvas-related classes
4. Every section component in src/components/sections/ — full rewrite (details below)
</files_to_modify>

<animation_philosophy>
Every animation must feel like Apple's website — intentional, physics-driven, never gratuitous.

Rules:
- No opacity-only fades (too basic). Use scale + blur + translateY combined.
- Stagger children with spring physics, not linear delays.
- Every section transition uses Framer Motion's useInView with spring stiffness: 100-200, damping: 20-30.
- Text never appears as a block — use SplittingText (char-by-char) or RollingText for headlines.
- Hover states use Tilt or Magnetic wrappers from animate-ui.
- Scroll-linked animations via Framer Motion useScroll + useTransform (not scroll-triggered class swaps).
</animation_philosophy>

<section_blueprint>HERO SECTION
File: src/components/sections/HeroSection.tsx

Replace: the Canvas + HeroSculpture R3F scene
Use: <GravityStarsBackground /> as the background layer (starsCount: 60, starsOpacity: 0.5, glowIntensity: 10, movementSpeed: 0.2)
or <GradientBackground /> (slower transition: 20s)

Text:
- Headline: <SplittingText text="I build systems that ship." type="chars" stagger={0.02} inView={true} initial={{ y: 80, opacity: 0, scale: 0.95 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
- Subtitle: <RollingText text="Founding Engineer · Full-Stack · Product Builder" delay={0.8} />

CTA: A LiquidButton (<LiquidButton variant="outline" size="lg" hoverScale={1.02}>) wrapping an anchor that smooth-scrolls to #projects.

The entire hero container should use Framer Motion:
- On mount: scale(0.98) → scale(1), opacity 0 → 1 over 1.2s
- On scroll (useScroll + useTransform): content translates up slightly, opacity fades to 0.3

No name visible. Leave a gap where name would go — styled as a thin horizontal line or empty space.
</section_blueprint>

<section_blueprint>BUILD PHILOSOPHY
File: src/components/sections/BuildPhilosophy.tsx

Replace: the current implementation
Use: A centered full-viewport section with:

- Eyebrow text: <ShimmeringText text="PHILOSOPHY" duration={2} /> at top
- Philosophy line: <HighlightText text="Ship the V1. Protect the data model. Make the system legible." inView={true} transition={{ duration: 1.5 }} /> using the amber gradient
- A subtle animated underline that draws from center outward on scroll reveal (CSS animation: width 0 → 100% with transition)

The text should be large (clamp 2rem-4rem), light weight (300), with max-width 800px centered.
Use Framer Motion useInView to trigger the animation sequence.
</section_blueprint>

<section_blueprint>PROJECT SECTIONS
File: src/components/sections/ProjectSection.tsx

Replace: each project's R3F scene with a CSS-animated "hero card" approach.

Each project is a full-viewport section with:
- Background: subtle moving gradient or stars (use StarBackground with very low opacity, speed: 30)
- A large floating "card" with glass-panel styling (existing .glass-panel class)
- Inside the card:
  - Project title: <GradientText text={project.title} gradient="linear-gradient(135deg, #F59E0B, #E8D5B7)" />
  - Role/description: smaller text, <RollingText> or plain with Framer Motion fade-up
  - Stack pills: existing .tool-pill class wrapped in <Magnetic strength={0.3} range={60}>
  - Status badge: existing .badge class

The card itself should be wrapped in <Tilt maxTilt={5} perspective={1200}> for subtle parallax on hover.

Animation sequence (staggered, spring physics):
1. Background opacity fades in (0→1, 1s)
2. Card slides up (y: 100→0, spring, stiffness 100, damping 25)
3. Title rolls in (0.3s delay)
4. Text fades in (0.5s delay)
5. Pills stagger in (0.1s each delay)

Use the existing portfolio data from src/data/portfolio.ts. No name visible.

For alternating layout: even-index projects have card on left, odd-index on right. On mobile, all centered.
</section_blueprint>

<section_blueprint>TOOLCHAIN SECTION
File: src/components/sections/ToolchainSection.tsx

Replace: current implementation with a more dynamic grid.

- Use the existing .toolchain__grid layout but each group wrapped in <Tilt maxTilt={3} perspective={1000}>
- Group title: <SplittingText text={group.label} type="chars" inView={true} stagger={0.03} />
- Each tool pill: wrapped in <Magnetic strength={0.2} range={40} onlyOnHover={true}>
- Background: subtle <StarsBackground starColor="#F59E0B" speed={40} factor={0.02} pointerEvents={false} />

Animation: groups stagger in from bottom (y: 60→0) with spring physics as user scrolls via useInView.
</section_blueprint>

<section_blueprint>TIMELINE SECTION
File: src/components/sections/TimelineSection.tsx

Replace: current hover-expand timeline with an auto-advancing animated timeline.

Similar structure but:
- Each timeline node: wrapped in <Magnetic strength={0.3} range={50}>
- Company name: <GradientText text={item.company} />
- Role + period: smaller text
- On hover/inView: focus items animate in with word-by-word reveal using <SplittingText type="words" stagger={0.05}>

The timeline dot should animate (scale 0→1) on scroll reveal, one by one.
Preserve the vertical line with gradient (existing CSS .timeline__line::before).
</section_blueprint>

<section_blueprint>CONTACT / GATEWAY
File: src/components/sections/ContactGateway.tsx

Replace: current implementation.

- CTA text: <ShimmeringText text="Available for founding roles" duration={3} />
- Links: each link wrapped in <Magnetic strength={0.5} range={80} onlyOnHover={true}>
- CV button: <LiquidButton variant="outline" size="lg">Download CV</LiquidButton>
- Background: <GravityStarsBackground starsCount={40} movementSpeed={0.1} mouseInfluence={50} />

Each link should have a subtle hover effect using existing .contact__link styles plus the Magnetic wrapper.

The email/github/linkedin icons should be inline SVGs (existing or new).
</section_blueprint>

<files_to_keep_unchanged>
- src/data/portfolio.ts (all content data stays the same)
- src/lib/portfolio-types.ts (types stay)
- src/app/globals.css (keep the design system, potentially add new keyframes)
- src/components/providers/SmoothScrollProvider.tsx (Lenis stays)
</files_to_keep_unchanged>

<cursor_integration>
In layout.tsx, wrap the entire body with:
```
import { CursorProvider, Cursor, CursorFollow } from '@/components/animate-ui/components/cursor';

<CursorProvider>
  <Cursor />
  <CursorFollow side="bottom" align="center">Founding Engineer</CursorFollow>
  {children}
</CursorProvider>
```
The cursor should be a small ring that follows the mouse with spring physics. Only show on desktop (media query or useDeviceDetect).
</cursor_integration>

<quality_standards>
1. Every section must use useInView or useScroll from Framer Motion for scroll-triggered entries.
2. All transitions use spring physics (stiffness: 80-200, damping: 15-30), never linear/ease.
3. No Three.js imports anywhere. Remove react-three-fiber, drei, three, postprocessing from package.json.
4. Text is condensed — maximum 2 lines per project description, 1 sentence for philosophy.
5. The font stack uses the existing Space Grotesk (display) and Inter (body).
6. The site must build successfully with `npm run build`.
7. Mobile: reduce particle backgrounds, disable cursor follow, simplify tilt/magnetic effects.
8. The name is NOT displayed anywhere. Leave the space empty.
</quality_standards>

<deliverable>
Return the complete modified project. Delete all Three.js files and dependencies. Install and configure Animate UI. Rewrite all 6 section components. The result must feel like an Apple product page — minimal text, intentional motion, hand-crafted quality, zero "vibe code" tells.
</deliverable>
