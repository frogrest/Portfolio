# React Bits: TypeScript + Tailwind CSS Animations

This directory contains production-ready, accessible animation components built with **TypeScript**, **Tailwind CSS**, and modern animation drivers (**Motion**, **GSAP**, and **HTML5 Canvas**).

---

## Component Catalog

### 1. `SplitText.tsx`
- **Driver**: `gsap` + `@gsap/react` (`ScrollTrigger`, `SplitText`)
- **Use Case**: Hero headings, title reveals, staggered character or word entrances with whole-word wrapping protection.
- **Props**:
  - `text`: string
  - `className?`: string
  - `delay?`: number (stagger in ms)
  - `duration?`: number (in seconds)
  - `ease?`: string (e.g. `'power3.out'`)
  - `splitType?`: `'chars' | 'words' | 'lines' | 'words, chars'`
  - `tag?`: `'h1' | 'h2' | 'h3' | 'p' | 'span'`
- **Example**:
  ```tsx
  import SplitText from '@/reactbits/animation/SplitText';

  <SplitText
    text="Creative Developer"
    tag="h1"
    className="text-5xl font-bold text-white"
    delay={50}
    duration={1}
  />
  ```

---

### 2. `BlurText.tsx`
- **Driver**: `motion/react`
- **Use Case**: Smooth letter-by-letter or word-by-word blur-to-sharp entrance effect.
- **Props**:
  - `text`: string
  - `delay?`: number (per-item delay in ms)
  - `animateBy?`: `'words' | 'letters'`
  - `direction?`: `'top' | 'bottom'`
- **Example**:
  ```tsx
  import BlurText from '@/reactbits/animation/BlurText';

  <BlurText
    text="Crafting hyper-polished digital experiences"
    delay={150}
    animateBy="words"
    direction="top"
    className="text-xl text-gray-400"
  />
  ```

---

### 3. `ShinyText.tsx`
- **Driver**: Tailwind CSS gradient shimmer animation
- **Use Case**: Eye-catching metallic shimmer badge, featured tags, or callout headers.
- **Props**:
  - `text`: string
  - `speed?`: number (seconds per sweep, default `3`)
  - `className?`: string
- **Example**:
  ```tsx
  import ShinyText from '@/reactbits/animation/ShinyText';

  <ShinyText
    text="Available for Q4 Projects"
    speed={2.5}
    className="text-xs uppercase tracking-widest font-semibold"
  />
  ```

---

### 4. `DecryptedText.tsx`
- **Driver**: Pure React state + requestAnimationFrame / interval
- **Use Case**: Cyberpunk / terminal character scramble effect on hover or on scroll into view.
- **Props**:
  - `text`: string
  - `speed?`: number (ms per frame)
  - `maxIterations?`: number
  - `sequential?`: boolean
  - `revealDirection?`: `'start' | 'end' | 'center'`
  - `useOriginalCharsOnly?`: boolean
  - `characters?`: string (custom scramble glyph set)
- **Example**:
  ```tsx
  import DecryptedText from '@/reactbits/animation/DecryptedText';

  <DecryptedText
    text="CLASSIFIED DOSSIER"
    speed={40}
    maxIterations={15}
    className="font-mono text-indigo-400"
  />
  ```

---

### 5. `ParticleCanvas.tsx`
- **Driver**: HTML5 Canvas 2D + `requestAnimationFrame` + `window.matchMedia('(prefers-reduced-motion: reduce)')`
- **Use Case**: Ambient particle background simulation with subtle connective filaments and physics-driven cursor repulsion.
- **Props**:
  - `className?`: string (e.g. `'pointer-events-none absolute inset-0'`)
- **Key Features**:
  - Automatically calculates density relative to canvas dimensions (caps at 55 particles for 60fps performance).
  - Listens to system accessibility preferences to suspend the render loop when reduced motion is preferred.
  - Interactive cursor proximity highlights with smooth alpha decay.
- **Example**:
  ```tsx
  import ParticleCanvas from '@/reactbits/animation/ParticleCanvas';

  <div className="relative w-full h-[600px] overflow-hidden bg-[#090a0f]">
    <ParticleCanvas className="opacity-70" />
    <div className="relative z-10 p-8">Content sits above particles</div>
  </div>
  ```

---

### 6. `TiltCard.tsx`
- **Driver**: `motion/react` spring physics + CSS 3D perspective + dynamic cursor radial gradient
- **Use Case**: 3D interactive tilt cards for featured projects, case study previews, or product highlights.
- **Props**:
  - `children`: `React.ReactNode`
  - `className?`: string
- **Key Features**:
  - Smooth spring interpolation (`stiffness: 300, damping: 25, mass: 0.5`).
  - Dynamic cursor spotlight glow (`radial-gradient`) following pointer coordinates in real-time.
  - Automatically deactivates rotation and spotlight when `prefers-reduced-motion` is detected.
- **Example**:
  ```tsx
  import TiltCard from '@/reactbits/animation/TiltCard';

  <TiltCard className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
    <h3 className="text-xl font-bold text-white">Project Title</h3>
    <p className="text-zinc-400 mt-2">Interactive card with 3D tilt & spotlight.</p>
  </TiltCard>
  ```

---

## Animation Guidelines for AI Agents

1. **Avoid Layout Shifts**: Always wrap splitting or animated texts in container elements with explicit or calculated min-height or `overflow-hidden`.
2. **Prevent Initial Opacity 0 Trap**: When using `whileInView`, ensure fallback visibility (`viewport={{ once: true, margin: "100px" }}`) or render at full opacity with spring/scale transforms rather than pure `opacity: 0` that could prevent search engine crawlers or fast screenshot tools from rendering.
3. **GSAP Revert on Unmount**: Always use `useGSAP` or clean up with `ctx.revert()` in `useEffect` returns to prevent memory leaks and duplicate SplitText instances.
4. **Enforce `prefers-reduced-motion`**: Whenever adding canvas simulations, continuous loops, or 3D tilt transforms, always query `window.matchMedia('(prefers-reduced-motion: reduce)')` to degrade gracefully to static renders.
5. **Protect Word Integrity**: Headings animated with character-splitting must retain word grouping spans (`inline-block whitespace-nowrap`) to prevent names from breaking awkwardly mid-character across mobile breakpoints.
