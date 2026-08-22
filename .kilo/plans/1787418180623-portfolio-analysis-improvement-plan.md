# Portfolio Analysis & Improvement Plan — Gian Carlo Noriega

## 1. Scope of the Project

A static single-page portfolio website for **Gian Carlo Noriega** ("Creative Developer & Editor"), plus one standalone prototype page. Flat, non-build-tool structure deployed as plain HTML/CSS/JS.

| Artifact | Purpose |
|---|---|
| `index.html` (663 lines) | Main portfolio: hero, trust/stack strip, about, skills + journey timeline, tabbed works section, contact, footer, background-audio toggle |
| `Styles/styles.css` (1274 lines) | Full design system — CSS custom property tokens (colors, type scale, spacing), hero effects, responsive breakpoints, reveal animations |
| `JS/script.js` (188 lines) | Vanilla JS: nav scroll state, randomized floating hero panels, IntersectionObserver reveals, works tab switcher, audio toggle, smooth anchors |
| `restaurant_chatbot.html` (511 lines) | Self-contained prototype: state-driven food-ordering chatbot with categories, cart, checkout, keyboard + ARIA wiring |
| `Images/` | 9 assets: cover/hero, headshot (Me.png/Me.jfif), 3 FrogPOS screenshots, Prepaview still, chatbot preview |
| `Audio/BG-Music.mp3` | Optional background music via floating toggle (default volume 0.1) |
| `TODO.md` | Prior polish checklist (all items completed) |
| `design.md` | Referenced in CSS header comment but **missing from repo** — dead reference |

**Site is currently hosted at a live URL** (origin is `frogrest` GitHub org; commits include "la na link ng website"). Git history shows iterative visual redesigns of the same single page.

## 2. Technologies Demonstrated

**Portfolio itself (directly verifiable in this repo):**
- HTML5 semantic structure; inline SVG icon system
- Tailwind CSS via CDN (config extended with custom tokens in `index.html` head)
- Custom CSS design-token system (CSS custom properties, gradient spotlights, glassmorphism, `clamp()` typography, keyframe animations)
- Vanilla JavaScript: DOM APIs, IntersectionObserver, inline styles/randomization, event delegation, audio API
- Accessibility touches: `aria-label`, `role="tablist"`/`tab`/`tabpanel`, `aria-live`, `aria-expanded`, `:focus-visible` styling
- Responsive design: breakpoints at 1024 / 899 / 768 / 640 / 480 px, `aspect-ratio`, `min(380px, calc(...))`

**Showcased skills (claimed/evidenced via FrogPOS, Prepaview, chatbot):**
- React 19, TypeScript, Node.js, Hono, Neon (serverless PostgreSQL), RLS multi-tenancy, offline-first PWA, QR self-ordering, kitchen display system, 80mm thermal receipts, i18n (English/Tagalog)
- Unreal Engine Blueprints + C++ (Prepaview gameplay/AI prototype)
- Vanilla JS state-machine conversational UI (Restaurant Bot)
- Video editing / VFX: After Effects, Sony Vegas, CapCut, Canva

## 3. Core Competencies Demonstrated

1. **Full-stack product engineering** — FrogPOS is a real, deployed multi-tenant SaaS with meaningful complexity (offline sync, RLS, payments/credits, localization).
2. **Frontend craft** — strong design-system discipline (tokens, spacing scale, motion), polished visual design, responsive + accessible markup.
3. **Creative-technical hybrid** — unique differentiator: ships production software *and* produces cinematic/video work (rare combined profile).
4. **Game prototyping** — Unreal Engine Blueprints/C++ playable demo.
5. **Self-starting / continuous building** — CS student with shipped live product; active in DevCon PH (Philippines developer community).

## 4. Key Skills Inventory

**Technical skills (strengths):**
- Frontend: React, TypeScript, Tailwind CSS, HTML/CSS, vanilla JS, responsive/accessible UI
- Backend: Node.js, Hono, PostgreSQL (serverless, RLS), REST API design
- Platform/ops: PWA/offline-first, multi-tenant SaaS architecture, deployment (live URLs)
- Game/dev tools: Unreal Engine (Blueprints, C++), Git/GitHub
- Creative: After Effects, Sony Vegas, CapCut, Canva, motion/color grading, game cinematics

**Soft skills (evidenced by content and behavior):**
- Storytelling and visual communication (hero copy, case-study narrative)
- Product thinking (feature scoping in FrogPOS: QR ordering, KDS, credits, receipts)
- Community engagement / collaboration (DevCon PH, open-source contributions claimed)
- Self-directed learning (CS student shipping production software)
- Bilingual/cultural awareness (English + Tagalog localization)
- Attention to detail (design tokens, motion polish, accessibility)

## 5. Gaps & Weaknesses Found

1. **No quantified impact.** Every project is described qualitatively. No store counts, order volumes, uptime, demo users, GitHub stars, or performance numbers. Recruiters need numbers.
2. **FrogPOS has no GitHub/code link** — only marketing site + live app. No evidence of code quality or contribution style.
3. **Prepaview is under-explained** — "responsive player logic and AI behavior systems" with no specifics, no architecture, no screenshots/video embedded (external YouTube/Drive links only).
4. **No downloadable résumé / CV** and no explicit availability state (open to internship? freelance? full-time?) beyond a vague banner.
5. **No social proof** — no testimonials, no certifications, no education institution named, no links to specific repos from the DevCon work.
6. **Only 3 projects** in the Works section (one is a small toy prototype). Case-study depth is thin — no Problem → Solution → Impact structure.
7. **No contact form or structured CTA funnel** — plain `mailto:` only.
8. **Missing `design.md`** referenced in CSS header comment.
9. **Minor code-quality notes:** duplicated headshot assets (`Me.png`/`Me.jfif`); `Sony Vegas`/`Capcut`/`Canva` listed as skills (weaker signal for software-engineering roles); Tailwind loaded via CDN (no build step, no version pinning).
10. **Timeline duplication** — two entries both labeled "2022–2026" (CS + video editing) look like a copy/paste error; no discrete date ranges.

## 6. Recommended Actions (ordered by impact)

### A. Content — quantify everything (highest impact)
1. Add metrics to FrogPOS: e.g., "N stores onboarded", "M+ transactions", "X QR orders served", "first paint < 2s offline-capable", "2-language coverage". Add "Current status: beta — onboarding pilot stores".
2. Add a GitHub link (or private repo demo) for FrogPOS alongside the live links.
3. Deepen Prepaview: list concrete systems (state machine, AI perception, locomotion, UMG UI), add 2–3 more stills, embed the reel.
4. Rewrite the Restaurant Bot blurb to emphasize the state machine + `aria-live` accessibility angle (shows real frontend engineering, not just a toy).
5. Convert each Works panel to a mini case study: **Problem → Approach → Stack → Impact**, 4–6 bullet points max.

### B. Structure — professional framing
6. Add a **"Current status" line** in hero/contact ("Open to internships & freelance — based in PH").
7. Add a **Résumé download** button (PDF in repo root) in nav + contact card.
8. Fix the **journey timeline**: distinct date ranges (e.g., CS 2023–2027, editing 2022–present, DevCon PH 2025–present) and add an entry for **FrogPOS launch**.
9. Add a **"Stack"** note clarifying proficiency vs. exposure (e.g., "Production: React/TS/Node/Postgres · Familiar: Python, C#, Java/.NET, UE") to avoid over-claiming on a CS-student CV.
10. Add an **Education/Organizations** sub-block or fold DevCon PH contribution links (specific PRs/repos) into the timeline.

### C. Professional impact
11. Add 1–2 **testimonials** (DevCon mentor, pilot store owner, or professor) — even 1 short quote raises trust.
12. Add an **email/CTA form** (mailto fallback) or at least a "copy email" button; add WhatsApp/Telegram alternative for PH-market contacts.
13. Add **certifications/courses** section only if real (e.g., freeCodeCamp, Meta Frontend, AWS basics) — omit if none.
14. Add **analytics** (e.g., Cloudflare Web Analytics, free & privacy-light) to learn what visitors click.
15. Fix dead references: remove `design.md` comment or restore the file.

### D. Code / hygiene (low effort, visible quality signal)
16. Remove duplicate `Me.jfif`; keep one headshot. Use `loading="lazy"` + explicit `width/height` to prevent layout shift (partially done already).
17. Pin Tailwind (CDN version) or — better — add a tiny Vite build so Tailwind is compiled locally. This signals production-grade workflow and removes CDN dependency.
18. Add `aria-label` to the audio FAB, ensure tab-panel `tabindex` management, run a Lighthouse pass (a11y + perf) and record scores in README.
19. Add a `README.md` describing the project, stack, and how to run locally.
20. Rename portfolio project repo folder (`Portfolio-6a557af...`) to something professional like `portfolio` — repo hygiene matters on GitHub.

## 7. Validation Plan
- After content edits: open `index.html` locally, verify all sections render, tabs switch, reveals fire, audio toggle works, mobile breakpoints OK.
- Run Lighthouse (Chrome DevTools) on the deployed site: target a11y ≥ 95, performance ≥ 85.
- Confirm all links resolve (frogrest.com, pos.frogrest.com, YouTube, Drive, GitHub, LinkedIn, mailto).
- Check no console errors after JS changes.

## 8. Out of Scope (explicitly not planned)
- Rebuilding the portfolio in React/Next (optional future move; static HTML is fine for a personal site).
- Creating FrogPOS marketing content (the site link already covers it).
- Adding a blog — only recommended once case studies are strong.

## 9. Open Questions
- Does the user have real metrics (stores, orders) they can share publicly for FrogPOS?
- Is there a FrogPOS GitHub repo that can be linked publicly?
- Any real certifications to include, or leave that section out?
- Preferred availability phrasing for the "status" line (internship vs freelance vs full-time)?
