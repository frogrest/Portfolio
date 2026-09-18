# React Bits: Comprehensive AI Agent Instructions & Operating Manual

> **Purpose**: This document provides strict, foolproof guidance for any AI coding agent working with **React Bits** components in this repository. Follow these instructions step-by-step to prevent hallucinations, broken builds, missing dependencies, or visual regressions.

---

## 1. What is React Bits?

[React Bits](https://reactbits.dev) is an open-source library of 80+ animated, interactive React components created by David Haz (`DavidHDev/react-bits`). It follows the "copy-paste / registry" architecture (like `shadcn/ui`), not a monolithic npm package.

### Variant Hierarchy (MANDATORY RULE)
React Bits publishes components in 4 distinct flavors:
1. **`TS-TW` (TypeScript + Tailwind CSS)** ➔ **ALWAYS USE THIS VARIANT IN THIS REPOSITORY**.
2. `JS-TW` (JavaScript + Tailwind CSS)
3. `TS-CSS` (TypeScript + Vanilla CSS)
4. `JS-CSS` (JavaScript + Vanilla CSS)

---

## 2. Installation & Acquisition Strategies

### Strategy A: Via `shadcn` CLI (Configured Registry)
This repository's `components.json` is configured with the official `@react-bits` registry:
```bash
npx shadcn@latest add @react-bits/[ComponentName]-TS-TW --yes
```
*Examples*:
- `npx shadcn@latest add @react-bits/SplitText-TS-TW --yes`
- `npx shadcn@latest add @react-bits/BlurText-TS-TW --yes`

### Strategy B: Direct Source from Upstream
If registry resolution times out or prompts interactively, fetch directly from the official upstream repository:
```text
https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/ts-tailwind/[Category]/[ComponentName]/[ComponentName].tsx
```
Target directory in this project:
- Reusable UI: `src/components/`
- Reference archive: `reactbits/animation/`

---

## 3. Dependency Mapping Matrix

Before using any React Bits component, verify that its specific driver is present in `package.json`:

| Component Type | Required Dependencies | Install Command |
|---|---|---|
| **Text Animations (Split, ScrollFloat)** | `gsap`, `@gsap/react` | `npm install gsap @gsap/react` |
| **Motion Animations (BlurText, Fade, Spring)** | `motion` | `npm install motion` |
| **Styling & Class Merging** | `clsx`, `tailwind-merge` | `npm install clsx tailwind-merge` |
| **3D / Canvas Effects (Waves, Hyperspeed)** | `three`, `@react-three/fiber`, `@react-three/drei` | `npm install three @types/three @react-three/fiber @react-three/drei` |

> [!IMPORTANT]
> In `motion` v12+, always import from `'motion/react'`, **NOT** `'framer-motion'`.

---

## 4. Critical Anti-Patterns & Gotchas to Avoid

### ⚠️ Gotcha 1: The `whileInView` Invisible Trap
- **Issue**: Setting `initial={{ opacity: 0 }}` with `whileInView={{ opacity: 1 }}` without margins can cause elements below the initial 720px fold to remain permanently invisible in headless screenshots, crawler indexing, or instant hash navigation.
- **Fix**: Always specify `viewport={{ once: true, margin: "200px" }}` or initialize with visible states (`opacity: 1`) and rely on hover/spring transforms (`whileHover={{ y: -4 }}`).

### ⚠️ Gotcha 2: GSAP Revert & Cleanups
- **Issue**: In React StrictMode, components mount twice. Uncontrolled GSAP tweens duplicate or split text multiple times into nested spans.
- **Fix**: Always register plugins and use the `useGSAP` hook or revert stored instances:
  ```tsx
  import { useGSAP } from '@gsap/react';
  useGSAP(() => {
    // GSAP logic here
  }, { scope: containerRef, dependencies: [text] });
  ```

### ⚠️ Gotcha 3: Font Loading Delay with SplitText
- **Issue**: SplitText computes character bounding boxes immediately on mount. If custom Google Fonts (`Plus Jakarta Sans`) haven't finished loading, character positions will glitch or overlap.
- **Fix**: Check `document.fonts.ready` before initializing split instances:
  ```tsx
  useEffect(() => {
    document.fonts.ready.then(() => setFontsLoaded(true));
  }, []);
  ```

---

## 5. Verification Checklist for the AI Agent

When adding or modifying a React Bits component:
- [ ] 1. Is it using TypeScript (`.tsx`) and Tailwind CSS classes?
- [ ] 2. Are all required peer dependencies installed in `package.json`?
- [ ] 3. Does `npm run build` pass without type errors or deprecation warnings?
- [ ] 4. Does the component render properly in Playwright tests (`npx playwright test`)?
- [ ] 5. Is it responsive across mobile and desktop viewports?
