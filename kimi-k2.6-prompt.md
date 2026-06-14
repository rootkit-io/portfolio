# Prompt for Kimi K2.6 — Build a Portfolio Website That Makes Founders Say "I Need This Person"

ALL 3D, visual effects, and background animations must be generated entirely in code using Three.js / React Three Fiber. Zero external image assets. Zero video files. Zero textures loaded from disk. Every visual is procedural — geometries, shaders, particles, noise functions, vertex displacement. The only non-code asset is the CV PDF.

---

## Core Identity (No Name — Use placeholders or leave gaps)

This portfolio is for a **Founding Engineer / Full-Stack Engineer / Product Engineer** — all three blended into one archetype. Do NOT put any name on the site. The name will be added manually later. Leave visual gaps or placeholders where a name goes.

**Core message founders should walk away with:** "This person builds. They ship production systems. They think in architecture AND craft."

---

## Visual Direction — Surreal / Artistic (Code-Generated Only)

- **Style:** Surreal meets technical. Think: floating geometric forms, glass-morphism panels, depth fog, particle fields, abstract data visualizations that feel like moving through a system architecture. Not dark cyberpunk. Not clean minimal. Surreal, artistic, otherworldly — but still professional.
- **Color palette:** Deep indigos, muted violets, warm amber accents (#2D1B4E → #1A0A2E backgrounds, #F59E0B or #E8D5B7 for accents). Soft glow effects. Avoid harsh neons.
- **Typography:** Large, airy, variable-weight headers. Thin-to-bold contrast. Something like Satoshi, Cabinet Grotesk, or similar. 300–800 weight range.
- **Grid:** Break the grid. Elements should float, overlap, and clip in unexpected ways. Not a Bootstrap layout.

---

## 3D & Animation Requirements — ALL CODE, NO ASSETS

Every visual element must be procedurally generated in code. You have full access to Three.js geometry/shader capabilities.

### Core animations:
1. **Hero section:** A procedurally generated 3D abstract sculpture — built from BufferGeometry with vertex displacement driven by simplex noise. Think interconnected nodes forming an architectural cluster. Slowly rotates. On scroll, vertices gently deform and the camera pushes in. Use custom ShaderMaterial for color shifts (deep indigo ↔ warm amber).
2. **Scroll-triggered zoom-ins:** Sections should "breathe" on scroll — elements scale from 0.95→1 with a subtle 3D camera push. Use scroll-triggered transforms, not just fade-ins.
3. **Text reveal:** Each headline should appear letter-by-letter or word-by-word with a smooth blur-to-clear + slight vertical float using Framer Motion. Not a basic opacity fade.
4. **Mouse-reactive elements:** 3D objects follow cursor with spring physics (via useFrame + lerp). Panels tilt slightly. Subtle, not gimmicky.
5. **Section transitions:** Content slides in from different directions depending on scroll direction. Overlapping section reveals — the next section starts fading/sliding before the current one finishes.
6. **Background layer:** A persistent particle system (PointsMaterial with custom shader) that changes color/behavior per section. Use vertex colors driven by section index.

---

## Page Structure — Single Scrollable Page

### 1. Hero Section
- No name visible (placeholder gap)
- One powerful line: "I build systems that ship." (keep it short)
- Small subtitle: "Founding Engineer · Full-Stack · Product Builder"
- Procedural 3D object cluster in the center/background (noise-driven vertex displacement, organic rotation)
- Scroll-down indicator (pure CSS animation)
- Soft CTA: "See the work" or "View projects"

### 2. "Build Philosophy" — 2–3 lines max
- One-liner about how they build: V1-first, production-minded, architecture-aware.
- Displayed as a floating text module with animated CSS underline/glow.
- Not a paragraph. Think: a poetic sentence that lands hard.

### 3. Projects (procedural 3D per project, text-light)

Each project gets a full-viewport section. The text is minimal (title, role, one line). The 3D scene IS the visual. Build a unique procedural scene for each:

**LifeAdmin OS — Fintech Subscription Intelligence**
- Procedural scene: A network of glowing nodes connected by lines (instanced mesh + LineSegments). Nodes pulse slowly. Data particles flow along connection paths (simulated with points + time-based animation). Colors: deep blue nodes, amber flowing particles.
- Overlay text: "CTO & Co-Founder · Fintech SaaS · Subscription Detection, Price Alerts, Recurring Payment Visibility"
- Badge: "In Production" (CSS badge with pulse)

**GhostAI — Solana Private Finance**
- Procedural scene: Concentric torus knots with translucent layered materials (MeshPhysicalMaterial with transmission + roughness). Forms slowly rotate at different speeds. Inner forms shift opacity like shielding/encryption visual metaphor. Colors: violet and amber transmission.
- Overlay text: "Engineering Contributor · Solana · Shielded Transactions · Hackathon 3rd Place"
- Badge: "Prize Winner" (CSS badge)

**Yeet Labs — Backend & DevOps**
- Procedural scene: Wireframe box geometry cluster resembling server racks floating in space. Each box has slight random oscillation. Connecting line segments between them. Low-poly aesthetic with emissive edges via EdgesGeometry.
- Overlay text: "Backend & DevOps Engineer · Go, Rust, Linux · Service Reliability & Automation"

**Dripcross — Sysadmin**
- Procedural scene: Nested concentric rings (TorusGeometry at varying sizes) floating with slow rotation. Inner rings rotate opposite direction. Minimal, meditative. Ring segments show slight wave displacement in vertex shader.
- Overlay text: "Junior System Administrator · 2 Years · Linux Operations"

### 4. Toolchain / Stack (visual grid)
- A floating, interactive "control panel" of tools grouped by category.
- Each tool is a small pill/icon with CSS 3D transforms. On hover, subtle Z-axis lift and glow filter.
- Groups: Frontend, Backend, Databases, Auth, Infra, AI, Security, Testing
- Background: subtle particle system (different density from hero)

### 5. Runtime History / Timeline
- A vertical timeline with floating nodes (CSS circles with animated borders).
- Each node expands on hover with a short line (4–8 words max).
- Node colors shift from cool to warm as time progresses (uses CSS gradient interpolation).

### 6. Contact / Gateway
- Minimal: Email icon, GitHub, LinkedIn
- CV download button (styled with CSS 3D perspective transforms — tilts on hover)
- Background: particle system that slowly forms the text "Available for founding roles" and then dissipates (particles are Points with custom shader that reads text as a target formation, using random initial positions lerping to text positions)

---

## Technical Requirements

- **Framework:** Next.js (App Router) + TypeScript
- **3D:** React Three Fiber + Three.js + @react-three/drei + @react-three/postprocessing (UnrealBloomPass for glow, EffectComposer)
- **Shaders:** Custom ShaderMaterial / RawShaderMaterial for particle systems and vertex displacement. Use simplex noise (implemented in GLSL or via lightweight helper).
- **Animations:** Framer Motion (layout + scroll animations) + Lenis (smooth scrolling)
- **Zero external assets:** No images, no textures, no video files. Only SVG icons for social links (inline or as React components).
- **Responsive:** Yes, but prioritize desktop as primary experience. Mobile: reduce particle count, lower geometry detail, disable bloom.
- **Performance:** Use InstancedMesh for repeated geometry. LOD for hero sculpture. Canvas pooling — share one R3F Canvas across all 3D sections using scroll-based rendering or multiple canvases with lazy mounting.
- **SEO:** Minimal meta tags. Generate OG image as a simple CSS gradient + text (can be a simple server-rendered screenshot).

---

## What NOT to Do

- No external image/video/asset files whatsoever
- No "About Me" section with paragraphs of text
- No resume-style bullet points
- No standard card grids (every section should feel bespoke)
- No standard fade-in animations
- No stock photos (not applicable, but still)
- No name visible anywhere (leave space for it)
- No loading spinner — use progressive reveal / content-first approach

---

## Deliverable

Return a complete, production-ready Next.js project with:

1. All 6 page sections implemented
2. A procedural Three.js scene in the hero with vertex noise displacement + scroll parallax
3. A unique procedural 3D scene for each of the 4 project sections
4. Particle background system that changes behavior per section
5. Smooth scroll-linked animations via Framer Motion + Lenis
6. A `CV.pdf` placeholder file (can be empty PDF or just a download button that says "CV coming soon")
7. OG image as a simple inline CSS solution (no external generation needed)

The entire project must have ZERO external media files. Every visual is generated programmatically.
