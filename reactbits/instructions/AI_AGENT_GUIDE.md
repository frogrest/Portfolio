# Quick Reference for AI Coding Agents: React Bits

This quick reference guide gives agents immediate orientation on navigating and utilizing `reactbits/`:

```text
reactbits/
├── animation/            # Ready-to-use TypeScript + Tailwind animation components
│   ├── BlurText.tsx      # Word/character blur reveal
│   ├── DecryptedText.tsx # Character scramble cyber reveal
│   ├── ParticleCanvas.tsx# Ambient particle physics canvas
│   ├── ShinyText.tsx     # Metallic gradient sweep
│   ├── SplitText.tsx     # GSAP character splitting entrance
│   ├── TiltCard.tsx      # 3D spring tilt & cursor spotlight
│   └── README.md         # Component catalog & props documentation
├── dependencies/         # Dependency catalog & install scripts
│   ├── README.md         # Step-by-step dependency installation instructions
│   └── package-deps.json # Exact dependency manifest
├── docs/
│   └── INSTRUCTIONS.md   # In-depth AI Agent operational manual & anti-patterns
└── README.md             # Root summary & quick start
```

## Immediate Rules:
1. **Always use TypeScript + Tailwind CSS** (`TS-TW` variant).
2. **Import Motion correctly**: `import { motion } from 'motion/react'` (never `'framer-motion'`).
3. **Register GSAP plugins once**: `gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP)`.
4. **Respect Reduced Motion**: Always inspect `matchMedia('(prefers-reduced-motion: reduce)')` for dynamic animations.
5. **Refer to `reactbits/docs/INSTRUCTIONS.md` for full troubleshooting steps.**
