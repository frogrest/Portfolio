# Origin UI (`origindev`): AI Agent Instructions & Best Practices

> **Purpose**: This guide instructs AI coding agents on how to select, adapt, and integrate **Origin UI** components cleanly into this React + Vite + TypeScript + Tailwind CSS project.

---

## 1. Core Principles of Origin UI

1. **Accessibility First**: All components use semantic HTML or Radix UI headless primitives with proper ARIA roles, states, and keyboard navigation.
2. **Tailwind CSS Styling**: Styles are composed directly using Tailwind CSS utility classes and modern color tokens.
3. **No Heavy Runtime**: Avoid heavy styling frameworks. Only lightweight utility dependencies like `clsx`, `tailwind-merge`, and `lucide-react` are needed.

---

## 2. Standard Dependencies

Origin UI components commonly rely on:
```bash
npm install lucide-react clsx tailwind-merge
```
For headless accessible primitives (when using complex dialogs, popovers, or dropdowns):
```bash
npm install @radix-ui/react-slot @radix-ui/react-dropdown-menu @radix-ui/react-dialog
```

---

## 3. Integration Guidelines for AI Agents

1. **Path Mapping**:
   - Place active portfolio components in `src/components/ui/` or `src/components/`.
   - Store reference implementations in `origindev/components/`.
2. **Theme Consistency**:
   - Align Origin UI components with the portfolio's dark palette:
     - Surface: `bg-white/[0.03]`, `bg-white/[0.05]`, or `#090a0f`
     - Border: `border-white/[0.08]` to `border-white/[0.12]`
     - Text: `text-white` (primary), `text-gray-400` (secondary)
     - Accent: `amber-500` or `amber-400` (The Director's Grading Suite)
3. **Labels & ARIA**:
   - Always link `<input>` elements to `<label>` using unique `id` and `htmlFor` attributes.
   - Include `aria-describedby` or accessible error states where appropriate.
