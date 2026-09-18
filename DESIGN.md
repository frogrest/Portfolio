---
name: Gian Carlo Noriega Portfolio Design System
description: Cinematic dark-tech design system with obsidian canvas, warm brass accents, and glassmorphic card architecture
colors:
  canvas: "#090a0f"
  primary: "#f59e0b"
  primary-hover: "#d97706"
  primary-highlight: "#fbbf24"
  status-emerald: "#10b981"
  text-heading: "#ffffff"
  text-body: "#a1a1aa"
  text-muted: "#71717a"
  border-glass: "rgba(255, 255, 255, 0.08)"
  surface-glass: "rgba(255, 255, 255, 0.02)"
  surface-hover: "rgba(255, 255, 255, 0.04)"
  scrollbar-thumb: "#27272a"
  scrollbar-thumb-hover: "#3f3f46"
typography:
  display:
    fontFamily: "Satoshi, Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Satoshi, Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Satoshi, Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Satoshi, Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.15em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#000000"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.text-heading}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  card-interactive:
    backgroundColor: "{colors.surface-glass}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Gian Carlo Noriega Portfolio

## Overview

**Creative North Star: "The Director's Grading Suite"**

The interface embodies the refined precision of a high-end post-production mastering suite combined with the technical rigor of modern software engineering. It eschews generic developer portfolio templates and AI gradient clichés in favor of deep obsidian depth, disciplined typographic hierarchy, and warm amber illumination reminiscent of studio monitors and color-grading hardware.

Surfaces feel tactile, deliberate, and calm. Motion is strictly physics-based, communicating mass and spatial continuity rather than superficial flash.

**Key Characteristics:**
- **Obsidian Ground**: Deep, true dark background (`#090a0f`) that allows artifact imagery, video previews, and code highlights to lead with maximum contrast.
- **Cinematic Brass Accent**: Purposeful amber/warm gold tokens (`#f59e0b`) reserved strictly for interactive focus, milestone indicators, and primary CTAs.
- **Glassmorphic Precision**: Razor-thin translucent borders (`rgba(255, 255, 255, 0.08)`) with backdrop blur providing tactile layer separation without heavy drop shadows.
- **Strict Accessibility Floor**: Every interactive touch target exceeds 44×44px, contrast meets WCAG 2.1 AA across every text layer, and reduced-motion preferences are honored globally.

---

## Colors

The palette is grouped into high-contrast functional roles rooted in dark-tech elegance.

### Primary
- **Cinematic Amber** (`#f59e0b`): The central interactive accent. Applied to primary call-to-action buttons, active timeline milestones, and featured badges.
- **Burnished Brass Hover** (`#d97706`): Rich darkened hover state for tactile depth.
- **Amber Filament Glow** (`#fbbf24`): Subtle illumination for focus rings and hover transitions.

### Secondary
- **Operational Emerald** (`#10b981`): Dynamic status indicator confirming immediate availability for client and contract engagements.

### Neutral
- **Obsidian Canvas** (`#090a0f`): Ground surface for the entire viewport.
- **Glass Surface** (`rgba(255, 255, 255, 0.02)`): Interactive card and module background.
- **Glass Highlight Border** (`rgba(255, 255, 255, 0.08)`): Perimeter containment border on containers.
- **Bright White** (`#ffffff`): High-clarity primary titles and interactive card headers.
- **Zinc Body** (`#a1a1aa`): Readable long-form prose and descriptions (60:1 contrast ratio against obsidian).
- **Muted Zinc** (`#71717a`): Timestamps, secondary metadata, and icon accents.

### Named Rules
**The Five-Percent Accent Rule.** Cinematic amber is used on ≤5% of any viewport. Its scarcity is what gives it authority and urgency.

**The Solid Type Rule.** Text never uses gradient fills or clipping masks. Typography is always rendered in solid, uncompromised contrast.

---

## Typography

**Display & Body Font:** `Inter`, `system-ui`, `-apple-system`, sans-serif.
**Monospace / Metadata Font:** `ui-monospace`, `SFMono-Regular`, `Menlo`, monospace.

**Character:** Modern, clean, and highly legible. Headings are tight and authoritative with negative letter-spacing; metadata labels use uppercase tracked monospace for an engineered, instrument-grade demeanor.

### Hierarchy
- **Display** (800 Weight, `clamp(2.5rem, 6vw, 4.5rem)`, 1.15 line-height, `-0.03em` tracking): Used exclusively for the Hero greeting headline.
- **Headline** (700 Weight, `clamp(1.875rem, 4vw, 2.5rem)`, 1.2 line-height, `-0.02em` tracking): Section titles (`About Me`, `Selected Projects`, `Experience & Roles`).
- **Title** (700 Weight, `1.25rem` to `1.5rem`, 1.3 line-height): Card headings, project titles, degree headers.
- **Body** (400 Weight, `0.875rem` to `1rem`, 1.6 line-height): Descriptive text and bio paragraphs, capped at 65–70ch line length.
- **Label / Tag** (700 Weight, `0.75rem`, `0.15em` tracking, Uppercase): Category kickers, timeline dates, and technology chips.

### Named Rules
**The Whole-Word Integrity Rule.** Animated headings must split by words first, ensuring personal names and brand terms never wrap mid-character across screen sizes.

---

## Layout

The spatial model uses an 8pt grid with fluid container max-widths:
- **Max Container Width**: 72rem (1152px) centered with responsive horizontal padding (`px-4 sm:px-6`).
- **Section Spacing**: Vertical rhythm follows `space-y-24 md:space-y-32` for spacious, uncluttered breathing room between narrative milestones.
- **Card Bento Grids**: 1-column on mobile (<768px), 2-column on tablet (768px–1024px), and 3-column on desktop (1024px+) with uniform `gap-6`.

---

## Elevation & Depth

Depth is established through **tonal layering and glassmorphism** rather than traditional opaque shadows.

### Elevation Vocabulary
- **Surface Level 0 (Ground)**: `#090a0f` solid background.
- **Surface Level 1 (Card Rest)**: `bg-white/[0.02] border border-white/[0.08]` with `backdrop-blur-md`.
- **Surface Level 2 (Card Hover)**: `translateY(-3px)`, `border-amber-500/30`, and ambient glow `shadow-amber-500/10`.
- **Surface Level 3 (Active Modal / Mobile Drawer)**: `bg-[#090a0f]/95 border-white/[0.08]` with `backdrop-blur-xl`.

### Named Rules
**The Ambient Light Rule.** Diffuse ambient colored light glows (`blur-[140px]`) are locked behind `-z-10` with low opacity (`<0.05`), ensuring they enhance atmosphere without obscuring readability.

---

## Shapes

- **Micro-Elements (Chips, Badges)**: `rounded-md` (6px) or `rounded-full` (9999px) for pill tags.
- **Interactive Controls (Buttons, Inputs)**: `rounded-xl` (12px) for a modern, tactile touch experience.
- **Cards & Modules**: `rounded-2xl` (16px) bounding corners with razor-thin borders (`1px`).

---

## Components

### Buttons
- **Primary CTA**: `min-h-[44px] px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5`.
- **Secondary Ghost**: `min-h-[44px] px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-zinc-200 font-medium text-sm border border-white/[0.1] hover:border-amber-500/30 transition-all`.
- **Pill Action (Project Links)**: `min-h-[44px] px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-100 hover:text-amber-300 border border-white/[0.08]`.

### Cards
- **Structure**: Multi-layered vertical flex container with independent header, description, tag group, and action footer.
- **Border**: `1px solid rgba(255, 255, 255, 0.08)`, transitioning to `rgba(245, 158, 11, 0.3)` on hover.

### Form Inputs
- **Style**: `min-h-[44px] px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-500 text-sm`.
- **Focus**: `focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40`.

---

## Do's and Don'ts

### Do:
- **Do** maintain a minimum 44×44px bounding box on all interactive controls.
- **Do** reserve the amber accent for primary moments of interaction and key achievements.
- **Do** provide immediate tactile feedback (hover lift, active press, focus ring) on all buttons.
- **Do** respect `prefers-reduced-motion` across all custom animations.

### Don't:
- **Don't** use decorative gradient text (`bg-clip-text text-transparent`) or purple/cyan AI glow tells.
- **Don't** use low-contrast text (e.g., dark gray on black).
- **Don't** trap users in modals or mobile drawers without clear dismiss mechanisms.
- **Don't** break names or technical titles across individual letters.
