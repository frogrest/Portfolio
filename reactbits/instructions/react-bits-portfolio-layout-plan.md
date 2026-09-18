# React Bits Portfolio Layout Plan

## Goal

Build a visually dynamic portfolio using **React + Vite + TypeScript + Tailwind CSS** with selected **React Bits** components.

The page should feel like one connected experience rather than a collection of unrelated effects.

---

## React Bits Components

Install the following components:

```bash
npx shadcn@latest add @react-bits/Backgrounds-TS-TW
npx shadcn@latest add @react-bits/ScrollExpand-TS-TW
npx shadcn@latest add @react-bits/ProfileCard-TS-TW
npx shadcn@latest add @react-bits/StaggeredMenu-TS-TW
npx shadcn@latest add @react-bits/FolderFloat-TS-TW
npx shadcn@latest add @react-bits/AccordionGallery-TS-TW
```

---

## Page Structure

### 1. Main Background

Use:

```bash
npx shadcn@latest add @react-bits/Backgrounds-TS-TW
```

Use this as the main animated background of the portfolio.

Requirements:

- Keep it behind the main page content.
- Make sure it does not reduce text readability.
- Keep the overall visual style clean, dark, modern, and cinematic.
- Avoid excessive motion that distracts from the portfolio content.
- Optimize it so it remains smooth on mobile.

---

## 2. Double Hero Section

Use:

```bash
npx shadcn@latest add @react-bits/ScrollExpand-TS-TW
```

Combine this with the React Bits background.

### Hero Concept

Create a two-stage hero experience.

#### Hero Stage 1

At the top of the website:

- Show my name.
- Show my role/title.
- Add a short introduction.
- Place my image prominently in the center.
- Keep the image layered above the animated background.

Example content:

```text
Gian Carlo Noriega

Full-Stack Developer
Creative Technologist
Video Editor
```

#### Hero Stage 2

As the user scrolls:

- Use `ScrollExpand` to smoothly scale and expand my image.
- The image should visually transition into the next hero state.
- Avoid sudden jumps or layout shifts.
- Keep the scaling smooth and cinematic.
- Use the image transition as the main visual connection between the two hero sections.

The result should feel like:

```text
Hero Introduction
        ↓
Centered Portrait
        ↓
Scroll
        ↓
Portrait Expands
        ↓
Second Hero / About Section
```

---

## 3. Navigation

Use:

```bash
npx shadcn@latest add @react-bits/StaggeredMenu-TS-TW
```

Use `StaggeredMenu` as the primary navigation.

Navigation items:

```text
Home
About
Skills
Projects
Gallery
Contact
```

Requirements:

- Keep the navigation available across the page.
- Use smooth scrolling when navigating between sections.
- Make it responsive for desktop and mobile.
- Keep the animation subtle enough that navigation remains quick and usable.

---

## 4. Profile / About Section

Use:

```bash
npx shadcn@latest add @react-bits/ProfileCard-TS-TW
```

Place the profile card after the hero transition.

The card should contain:

- Profile image
- Name
- Full-Stack Developer
- Creative Technologist
- Video Editor
- Short description
- Location
- Availability
- Optional social links

Example:

```text
Gian Carlo Noriega

Full-Stack Developer · Creative Technologist · Video Editor

Philippines
Available for remote work and freelance projects.
```

Customize the card so it matches the same visual language as the hero section.

---

## 5. Skills Section

Use:

```bash
npx shadcn@latest add @react-bits/FolderFloat-TS-TW
```

Use `FolderFloat` to display skills in interactive categories.

Suggested folders:

### Frontend

```text
React
TypeScript
JavaScript
Tailwind CSS
HTML
CSS
```

### Backend

```text
Node.js
Hono
REST APIs
PostgreSQL
SQL
```

### Programming

```text
Python
C#
Java
C/C++
```

### Creative

```text
Unreal Engine
After Effects
Video Editing
Motion Graphics
Photography
```

### Tools

```text
Git
GitHub
Vite
VS Code
Playwright
```

The folders should be interactive but still easy to understand.

Do not sacrifice readability for animation.

---

## 6. Projects and Personal Gallery

Use:

```bash
npx shadcn@latest add @react-bits/AccordionGallery-TS-TW
```

Use `AccordionGallery` for two purposes:

### Projects

Show featured projects such as:

```text
FrogPOS
Prepaview
Restaurant Bot
Frontend Experiments
Client Website Templates
```

Each item can contain:

- Project image
- Project name
- Short description
- Technologies
- Demo link
- GitHub link

### Personal / Hobbies Gallery

Use a separate gallery or a second instance of `AccordionGallery`.

Possible categories:

```text
Photography
Cinematography
Game Development
Video Editing
Design Experiments
Personal Work
```

This section should give the portfolio more personality without overwhelming the professional work.

---

# Recommended Page Flow

```text
StaggeredMenu
      ↓
Backgrounds
      ↓
Hero Stage 1
      ↓
Centered Portrait
      ↓
ScrollExpand
      ↓
Hero Stage 2 / About
      ↓
ProfileCard
      ↓
FolderFloat Skills
      ↓
AccordionGallery Projects
      ↓
AccordionGallery Hobbies / Personal Work
      ↓
Contact
      ↓
Footer
```

---

# Implementation Rules

## Visual Consistency

All React Bits components must be customized to share:

- the same typography
- spacing system
- color palette
- border radius
- animation style
- background treatment
- responsive behavior

Do not leave components looking like their default demos.

They should feel like parts of one portfolio design.

---

## Animation Rules

Keep motion smooth and intentional.

Prefer:

- scroll-driven transitions
- subtle hover effects
- opacity changes
- scale transitions
- staggered entrances
- smooth layout movement

Avoid:

- excessive bouncing
- unnecessary spinning
- animations on every element
- effects that make reading difficult
- large performance-heavy effects on mobile

---

## Responsive Design

The entire portfolio must work on:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

For mobile:

- reduce background complexity if necessary
- reduce animation intensity
- prevent horizontal overflow
- keep menu controls accessible
- make galleries touch-friendly
- ensure the expanding hero image remains inside the viewport

---

# Suggested React Structure

```text
src/
├── assets/
│   ├── profile/
│   ├── projects/
│   └── gallery/
│
├── components/
│   ├── react-bits/
│   ├── navigation/
│   └── ui/
│
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
│
├── data/
│   ├── skills.ts
│   ├── projects.ts
│   └── gallery.ts
│
├── App.tsx
└── main.tsx
```

---

# AI Agent Instruction

Use the installed React Bits components as the primary building blocks for this portfolio.

Do not recreate an effect manually if the requested React Bits component already provides it.

Build the page in this order:

1. Set up the main background.
2. Create the double hero using `ScrollExpand`.
3. Add the centered profile image.
4. Add the `StaggeredMenu`.
5. Build the profile/about section using `ProfileCard`.
6. Build the skills section using `FolderFloat`.
7. Build the projects gallery using `AccordionGallery`.
8. Add a second gallery for hobbies or personal work if it improves the layout.
9. Connect all sections with consistent spacing, typography, colors, and motion.
10. Test desktop and mobile responsiveness.

The final design should feel **cinematic, modern, interactive, polished, and professional**, but should not look overly animated or cluttered.

Prioritize performance, readability, responsiveness, and visual consistency.
