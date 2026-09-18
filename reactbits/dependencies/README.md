# React Bits Dependencies Guide

This directory documents the core, animation, and 3D dependencies required by components in the **React Bits** ecosystem (`reactbits.dev`).

## 1. Core Animation Libraries

### GSAP (GreenSock Animation Platform)
Used for high-precision timeline, scroll, and text-splitting animations (e.g., `SplitText`, `BlurText`, `ScrollFloat`):
```bash
npm install gsap @gsap/react
```
- **`gsap`**: Core tweening engine and plugins (`ScrollTrigger`, `SplitText`).
- **`@gsap/react`**: Provides the `useGSAP` hook for safe cleanup and scoped timeline execution in React 18/19.

### Motion (Framer Motion)
Used for physics-based spring animations, gestures, layout animations, and in-view reveals:
```bash
npm install motion
```
> **Import Convention (Modern Motion v12+)**:
> ```tsx
> import { motion, AnimatePresence } from 'motion/react';
> ```

---

## 2. Utility & Styling Dependencies

### Tailwind CSS Helper Utilities
Required for dynamic class merging and conditional styling:
```bash
npm install clsx tailwind-merge
```
- Used in `src/lib/utils.ts` for the `cn()` helper function:
  ```ts
  import { clsx, type ClassValue } from 'clsx';
  import { twMerge } from 'tailwind-merge';

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  ```

### Iconography
```bash
npm install lucide-react
```

---

## 3. Optional 3D / Canvas Dependencies

For 3D backgrounds and canvas effects (e.g., `Waves`, `Hyperspeed`, `Ballpit`, `Threads`, `Particles`):
```bash
npm install three @types/three @react-three/fiber @react-three/drei
```

---

## 4. Quick Install All Recommended Dependencies

Run in project root:
```bash
npm install gsap @gsap/react motion clsx tailwind-merge lucide-react
```
