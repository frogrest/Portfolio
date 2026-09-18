# Gian Carlo Noriega | Creative Technologist & Full-Stack Portfolio

[![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Motion-13.4-F59E0B?style=flat&logo=framer&logoColor=black)](https://motion.dev)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=flat&logo=greensock&logoColor=black)](https://gsap.com)
[![Playwright](https://img.shields.io/badge/Playwright-1.63-2EAD33?style=flat&logo=playwright&logoColor=white)](https://playwright.dev)
[![Taste-Skill Audited](https://img.shields.io/badge/Taste--Skill-45%2F45_Passed-10B981?style=flat)](./walkthrough.md)
[![Impeccable Audit](https://img.shields.io/badge/Impeccable_Audit-20%2F20_Flawless-10B981?style=flat)](./tests/impeccable-audit.spec.ts)
[![UX Heuristics](https://img.shields.io/badge/UX_Critique-31%2F32_(96.8%25)-10B981?style=flat)](./.impeccable/critique/2026-09-17T20-24-38Z__src.md)

> **GitHub Pages**: [https://frogrest.github.io/Portfolio/](https://frogrest.github.io/Portfolio/)  
> **GitHub Repository**: [https://github.com/frogrest/Portfolio](https://github.com/frogrest/Portfolio)  
> **Design Specification**: [DESIGN.md](./DESIGN.md) | **Product Definition**: [PRODUCT.md](./PRODUCT.md)

---

## ✦ Executive Overview

This repository hosts the personal portfolio and creative engineering hub of **Gian Carlo Noriega**: Creative Technologist, Full-Stack Developer, and Video Editor based in the Philippines (GMT+8).

Built from the ground up to embody **"The Director's Grading Suite"** design philosophy and strictly audited under the **`design-taste-frontend` (`taste-skill`)** anti-slop guidelines, the interface unites rigorous computer science discipline (React 19, TypeScript, offline-first architectures, PostgreSQL, and C++ gameplay systems) with tactile, cinematic visual craft (interactive canvas physics, 3D spring tilt mechanics, and micro-interactions).

### Key Architectural Strengths:
- **Zero AI-Slop / Anti-Generic Design**: Built according to strict, audited UI guidelines: deep obsidian ground (`#090a0f`), warm brass accents (`#f59e0b`), razor-thin glass borders (`rgba(255,255,255,0.08)`), and solid high-contrast typography without decorative gradient text clipping or purple/cyan clichés.
- **Flawless Quality Metrics**: 20/20 Impeccable Audit score (0 anti-patterns, 0 touch target violations), 31/32 Nielsen Usability Heuristics rating (96.8% "Excellent"), and 100% automated Playwright test coverage across viewports.
- **Accessibility Floor**: 100% of interactive controls exceed the standard 44×44px touch target guideline; hardware-accelerated motion components respect `prefers-reduced-motion` globally.

---

## 🎨 Design Engineering & Taste-Skill Calibrations

The project is governed by the three core dials of the `taste-skill`:
- **`DESIGN_VARIANCE: 7`**: Asymmetric layouts, rhythmic diversity, and domain-calibrated project cards rather than monotonous symmetry.
- **`MOTION_INTENSITY: 6`**: Physics-driven spring animations, interactive particle canvas, 3D tilt perspective, and zero-overhead reduced-motion fallbacks.
- **`VISUAL_DENSITY: 4`**: Spacious, uncluttered layouts with capped line lengths (65ch) and generous section breathing room (`space-y-24 md:space-y-32`).

### Anti-Slop Enforcements:
1. **Eyebrow Restraint (Rule 4.7)**: Eliminated the monotonous AI rhythm of placing uppercase tracked micro-labels above every section. A single, purposeful `SELECTED WORK` category kicker is preserved on Projects, satisfying the `count ≤ ceil(sectionCount / 3)` rule.
2. **Bento Background Diversity (Rule 4.7)**: Replaced uniform flat glass cards with domain-specific atmospheric gradients (FrogPOS warm amber, Prepaview sky-blue, Restaurant Bot emerald) maintaining obsidian ground continuity.
3. **CTA Intent Consistency (Rule 4.5)**: Standardized contact actions across the header and hero to "Get in Touch" (preventing conflicting duplicate intents like "Contact Me").
4. **Viewport Height Stability (Rule 3.E / 14)**: Configured Hero to `min-h-[85dvh]` to eliminate layout jumps from mobile browser dynamic address bars.
5. **Zero Em-Dashes (Rule 9.G)**: Replaced all em-dashes with clean hyphens across project dates and descriptions.
6. **Neutral Palette Lock (Rule 4.2)**: Standardized secondary and body typography to Tailwind's **Zinc** family (`text-zinc-200`, `text-zinc-300`, `text-zinc-400`).

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose & Implementation |
|---|---|---|
| **Core Framework** | [React 19](https://react.dev) | High-performance component architecture utilizing modern React 19 hooks and root rendering. |
| **Language** | [TypeScript 6](https://www.typescriptlang.org) | Strict type safety, clean interface contracts, and project references across components and tests. |
| **Build & Tooling** | [Vite 8](https://vite.dev) + [Oxlint](https://oxc.rs) | Lightning-fast HMR, optimized ESM bundling, and ultra-fast Rust-based linting. |
| **Styling Engine** | [Tailwind CSS v4](https://tailwindcss.com) | `@tailwindcss/vite` compiler integration, CSS variable tokens, glassmorphic utilities, and custom keyframes. |
| **Animation Drivers** | [Motion v13](https://motion.dev) & [GSAP 3](https://gsap.com) | Physics-based spring interpolations via `'motion/react'` and staggered text reveals via GSAP. |
| **Component Libraries** | [React Bits](https://reactbits.dev) & [Origin UI](https://originui.com) | Curated copy-paste TypeScript + Tailwind animation and accessible UI primitives. |
| **Testing Suite** | [Playwright](https://playwright.dev) | Headless multi-viewport E2E regression, accessibility verification, and golden screenshot assertions. |

---

## 🌟 Interactive Features & Custom Components

### 1. ScrollExpand Hero (`src/components/react-bits/ScrollExpand.tsx`)
- Starts in a focused 3:4 portrait card framed by ambient `LineWaves`.
- Pins smoothly on scroll, dynamically expanding to cover the full viewport while transitioning opacity and typography.
- Unveils Gian Carlo Noriega, verified badges, professional titles, and core value proposition upon scroll expansion.

### 2. Floating Portfolio AI Assistant (`src/components/PortfolioAssistant.tsx`)
- Floating bottom-right assistant widget featuring an amber beacon and smooth spring entrance.
- Pre-loaded with comprehensive knowledge of Gian's background, production platforms, game engine projects, and technical skills.
- Includes quick-action chips and an instant in-chat download button for `ResumeLatest.pdf`.

### 3. Interactive Restaurant Bot Prototype (`src/components/ChatbotModal.tsx` & `src/lib/chatbot.ts`)
- Standalone interactive voice/chat ordering prototype ported from Gian's kitchen platform experiments.
- Demonstrates deterministic state machine conversation handling with simulated cart, dietary filters, and order confirmation.

### 4. Specular 3D Profile Card with Resume Access (`src/components/react-bits/ProfileCard.tsx`)
- Instant mouse-tracking 3D tilt with dynamic radial specular highlights.
- Direct **Resume** button with direct download and preview of `ResumeLatest.pdf`.
- Verified credentials, live availability indicator, and one-tap communication channels.

### 5. Accordion Project Gallery (`src/components/react-bits/AccordionGallery.tsx`)
- Horizontal accordion layout for featured systems (FrogPOS, Prepaview, Restaurant Bot).
- Verified live deployment links (FrogPOS live at `https://pos.frogrest.com`, Prepaview live at `https://frogrest.itch.io/prepaview`).

### 6. Creative Folder Float (`src/components/react-bits/FolderFloat.tsx`)
- 3D folder stack visualizer organizing creative VFX, Unreal Engine simulations, cinematography, and photography into tactile, interactive cards.

### 7. Dynamic Ambient Canvas & Shaders (`LineWaves.tsx` & `DotField.tsx`)
- Hardware-accelerated SVG sine waves behind the hero section.
- Interactive DotField grid with subtle cursor repulsion behind content sections, preventing visual monotony while maintaining dark obsidian aesthetics.

---

## 🔒 Security Hardening & Best Practices

- **HTTP Security Meta Tags**: Enforces `referrer` policy (`strict-origin-when-cross-origin`) and `X-Content-Type-Options: nosniff` in `index.html`.
- **Reverse Tabnabbing Protection**: All outbound target `_blank` links strictly enforce `rel="noopener noreferrer"`.
- **Form Sanitization & Debouncing**: Contact inputs strictly enforce `maxLength` limits (100 for name, 120 for email, 1500 for message) with submission throttling to mitigate spam.
- **Dependency Audit**: Verified 0 vulnerabilities via `npm audit`.

---

## 📂 Project Architecture

```text
Portfolio/
├── .agents/                    # Custom agent skills & workflows (taste-skill, brandkit, etc.)
├── public/                     # Static assets, fonts, icons & verified ResumeLatest.pdf
│   ├── favicon.svg             # Modern minimalist SVG monogram icon
│   └── ResumeLatest.pdf        # Verified resume document
├── src/
│   ├── assets/                 # Optimized static media, cover graphics, and screenshots
│   ├── components/             # Reusable UI & interactive widgets
│   │   ├── PortfolioAssistant.tsx # Floating AI portfolio assistant widget
│   │   ├── ChatbotModal.tsx       # Gian's Kitchen interactive ordering bot modal
│   │   └── react-bits/         # Modernized React Bits primitives
│   │       ├── ScrollExpand.tsx      # 3:4 to full-viewport scroll reveal
│   │       ├── StaggeredMenu.tsx     # Floating nav with real-time scroll spy
│   │       ├── ProfileCard.tsx       # 3D tilt card with Resume download button
│   │       ├── AccordionGallery.tsx  # Interactive project accordion
│   │       ├── FolderFloat.tsx       # 3D interactive creative media folder
│   │       ├── LineWaves.tsx         # Ambient SVG wave animations
│   │       └── DotField.tsx          # Interactive background dot matrix
│   ├── data/                   # Centralized typed portfolio & project datasets
│   ├── layouts/                # MainLayout wrapper with background and navigation
│   ├── lib/                    # Chatbot state logic and ordering engine
│   ├── sections/               # Modular page sections (Hero, About, Projects, Skills, Contact)
│   ├── utils/                  # Base URL asset path resolvers
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Tailwind CSS v4 & theme variables
│   └── main.tsx                # Application entry point
├── tests/                      # Automated Playwright test suite
│   ├── impeccable-audit.spec.ts # WCAG accessibility & touch target assertions
│   └── portfolio.spec.ts       # Full navigation, resume, and chatbot E2E tests
├── DESIGN.md                   # Formal design system specification
├── PRODUCT.md                  # Product purpose, positioning & feature matrix
├── package.json                # Project dependencies & build scripts
├── playwright.config.ts        # Playwright multi-device test runner config
├── tsconfig.json               # Strict TypeScript configuration
└── vite.config.ts              # Vite 8 build & bundle setup
```

---

## 🎯 Shipped Projects Documented

1. **FrogPOS**: *Full-Stack Point of Sale System*
   - Built with React, TypeScript, Node.js, and PostgreSQL.
   - Features offline-aware transaction synchronization, real-time table management, and sub-100ms checkout latency.
2. **Prepaview**: *AI-Driven Technical Interview Simulator*
   - Built in Unreal Engine with C++ gameplay architecture and AI behavior trees.
   - Simulates high-pressure live coding environments with adaptive evaluation models.
3. **Restaurant Bot**: *Deterministic Conversational Ordering Agent*
   - Built with TypeScript and deterministic state machines.
   - Handles multi-step customization, conversational dietary filtering, and zero-hallucination checkout flows.

---

## 🧪 Testing & Verification

Automated testing is integrated via **Playwright** to guarantee visual fidelity, responsiveness, and zero regressions across mobile and desktop environments.

### Run Tests:
```bash
# Run all Playwright test suites
npx playwright test

# Run tests in interactive UI mode
npx playwright test --ui

# Inspect HTML test reports
npx playwright show-report
```

### Audits & Heuristics:
- **Taste-Skill Pre-Flight Audit**: `45 / 45 criteria passed`
- **Impeccable Audit**: `npx impeccable audit` (20/20, 0 anti-patterns)
- **UX Heuristic Critique**: `npx impeccable critique` (31/32, 96.8%)
- **Design Token Synchronization**: `npx impeccable document`

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/frogrest/Portfolio.git

# 2. Enter project directory
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start local development server (http://localhost:5173/)
npm run dev

# 5. Build for production
npm run build

# 6. Preview production bundle
npm run preview
```

---

## 👤 Author & Contact

**Gian Carlo Noriega**  
- **Role**: Creative Technologist | Full-Stack Developer | Video Editor  
- **Email**: [giannoriega4everything@gmail.com](mailto:giannoriega4everything@gmail.com)  
- **Phone**: `+63 993 789 3097`  
- **GitHub**: [@frogrest](https://github.com/frogrest)  
- **Community**: DevCon Philippines Member  
- **Location**: Philippines (GMT+8) (*Remote Ready*)
