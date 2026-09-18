export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  problem?: string;
  approach?: string;
  impact?: string;
  demoUrl?: string;
  githubUrl?: string;
  marketingUrl?: string;
  liveAppUrl?: string;
  videoUrl?: string;
  itchUrl?: string;
  screenshots: { src: string; alt: string; caption?: string }[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  link?: { label: string; href: string };
  type?: 'work' | 'community' | 'founder' | 'education';
}

export interface SkillCategory {
  category: string;
  skills: { name: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  coursework: string[];
}

export const portfolioData = {
  personal: {
    name: "Gian Carlo Noriega",
    initials: "GN",
    role: "Full-Stack Developer | Creative Technologist | Video Editor",
    tagline: "Computer Science developer building production software, full-stack web applications, AI-integrated prototypes, game prototypes, and cinematic visual content.",
    bio: "Computer Science developer who refuses to choose between logic and art. With hands-on experience architecting multi-tenant cloud platforms, AI-assisted tools, and Unreal Engine gameplay simulations, I combine software engineering discipline with a director's eye for cinematic video post-production.",
    status: "Open to software engineering roles & freelance",
    location: "Philippines (Remote-friendly)",
    phone: "09937893097",
    email: "giannoriega4everything@gmail.com",
    portfolioUrl: "https://frogrest.github.io/Portfolio/",
    githubUrl: "https://github.com/frogrest",
    linkedinUrl: "https://linkedin.com/in/gian-carlo-noriega-02b70139b/",
    profileImage: "Images/profile.jfif",
    profileImageFull: "Images/Me.png",
    catImage: "Images/cat profile.webp",
  },
  skills: [
    {
      category: "Languages & Web",
      skills: [
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Python" },
        { name: "C#" },
        { name: "Java" },
        { name: "HTML/CSS" },
      ],
    },
    {
      category: "Frameworks & Data",
      skills: [
        { name: "React 19" },
        { name: "Node.js" },
        { name: ".NET" },
        { name: "PostgreSQL" },
        { name: "Tailwind CSS v4" },
      ],
    },
    {
      category: "AI & Engineering",
      skills: [
        { name: "LLM API Integration" },
        { name: "Prompt Engineering" },
        { name: "AI-Assisted Development" },
        { name: "Agentic Workflows" },
        { name: "State Machines" },
      ],
    },
    {
      category: "Creative & Game Tech",
      skills: [
        { name: "Unreal Engine" },
        { name: "After Effects" },
        { name: "Sony Vegas" },
        { name: "CapCut" },
        { name: "Blueprints & C++" },
      ],
    },
    {
      category: "Core Competencies",
      skills: [
        { name: "Offline-First PWAs" },
        { name: "Multi-Tenant SaaS" },
        { name: "UI Implementation" },
        { name: "Game Prototyping" },
        { name: "Video Editing & VFX" },
        { name: "Thermal Receipts" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "frogpos",
      title: "FrogPOS",
      subtitle: "Multi-Tenant Point-of-Sale Platform",
      description:
        "Designed, built, and shipped an offline-first point-of-sale platform tailored for Filipino stores and neighborhood restaurants. Built with a React + TypeScript frontend, Hono API, and PostgreSQL, providing instant cashier operations, QR self-ordering, real-time kitchen displays, inventory tracking, and 80mm thermal receipts.",
      tags: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Offline-First"],
      problem:
        "A dead signal or crashing cashier app means immediate lost revenue for neighborhood food stalls and retailers. Point-of-sale systems must keep operating uninterrupted the second internet drops.",
      approach:
        "Engineered an offline-first local queue that automatically synchronizes when connectivity restores, combined with tenant data isolation and row-level security.",
      features: [
        "Offline-first PWA — transactions queue locally and auto-sync when network returns",
        "Multi-tenant architecture with tenant isolation and self-serve store onboarding",
        "Live Kitchen Display System (KDS), split billing, and 80mm ESC/POS thermal receipt printing",
        "Full English and Tagalog localization with inventory and customer credit tracking",
      ],
      impact:
        "A complete production POS platform engineered from schema design to hardware receipt integration, deployed live at frogrest.com.",
      demoUrl: "https://pos.frogrest.com",
      marketingUrl: "https://frogrest.com",
      liveAppUrl: "https://pos.frogrest.com",
      githubUrl: "https://github.com/frogrest",
      screenshots: [
        { src: "Images/FrogPOS-Dashboard.png", alt: "FrogPOS Analytics & Order Dashboard", caption: "Store Analytics & Inventory Management" },
        { src: "Images/FrogPOS-POS.png", alt: "FrogPOS Cashier POS Terminal", caption: "High-Speed Cashier Terminal" },
        { src: "Images/FrogPOS-Receipt.png", alt: "FrogPOS Thermal Receipt", caption: "ESC/POS 80mm Thermal Receipt Layout" },
      ],
      featured: true,
    },
    {
      id: "prepaview",
      title: "Prepaview",
      subtitle: "Gamified Interview Simulation & Gameplay Prototype",
      description:
        "A high-fidelity interactive simulation and gameplay prototype built in Unreal Engine. Focuses on responsive character control, AI behavior navigation trees, and realistic simulation environments with custom Blueprints and C++ performance integrations.",
      tags: ["Unreal Engine", "Blueprints", "C++", "AI Behavior Trees", "Game Dev"],
      problem:
        "Traditional interview prep lacks situational realism and dynamic reactive pacing. Prepaview tests candidates under interactive physical and behavioral simulation.",
      approach:
        "Tuned feel-first movement physics and AI reaction logic to keep virtual interviewer and scenario encounters responsive and believable.",
      features: [
        "Responsive player control — physics-tuned character movement with zero latency feel",
        "AI behavior systems — reactive navigation trees and dynamic scenario responses",
        "Custom Blueprints combined with C++ integrations for performance-critical logic",
        "Playable game demo on itch.io alongside 60fps cinematic gameplay showcase reel",
      ],
      videoUrl: "https://www.youtube-nocookie.com/embed/v27Fh6bPfZI",
      itchUrl: "https://frogrest.itch.io/prepaview",
      demoUrl: "https://frogrest.itch.io/prepaview",
      githubUrl: "https://github.com/frogrest",
      screenshots: [
        { src: "Images/Prepaview.jpg", alt: "Prepaview Unreal Engine Gameplay Scene", caption: "Unreal Engine 5 In-Engine Scene" },
      ],
      featured: true,
    },
    {
      id: "restaurant-bot",
      title: "Restaurant Bot",
      subtitle: "State-Driven Conversational Ordering Prototype",
      description:
        "A zero-dependency conversational ordering interface designed with deterministic state machines, full keyboard accessibility, and XSS-safe sanitized rendering. Translates natural ordering intent into validated carts and receipts.",
      tags: ["TypeScript", "JavaScript", "State Machines", "Accessibility", "Conversational UI"],
      problem:
        "Ordering bots with stochastic LLM backends often hallucinate menu prices or fail state transitions. Simple transactions require 100% deterministic reliability.",
      approach:
        "Constructed a pure state machine handling greeting, menu category exploration, item selection, alias resolution, and order checkout with aria-live announcements.",
      features: [
        "Deterministic state machine — cleanly cycles greeting, shopping, cart review, and checkout",
        "Input alias resolution — understands numbers, menu item names, and category aliases",
        "Accessible ARIA live regions — screen readers automatically announce new bot replies",
        "XSS-safe output sanitization and lightweight zero-dependency architecture",
      ],
      demoUrl: "chatbot-prototype",
      githubUrl: "https://github.com/frogrest",
      screenshots: [
        { src: "Images/RestaurantChatbot.png", alt: "Restaurant Bot Interface and State Machine", caption: "Conversational Ordering & Cart State" },
      ],
      featured: true,
    },
  ] as Project[],
  experience: [
    {
      id: "exp-frogpos",
      role: "Founder & Lead Software Engineer",
      company: "FrogPOS",
      period: "2025 - Present",
      type: "founder",
      description:
        "Designed, built, and launched a multi-tenant point-of-sale platform serving Filipino neighborhood retail stores and food establishments.",
      highlights: [
        "Architected offline-first PWA sync engine allowing cashiers to register transactions during complete connectivity outages.",
        "Built multi-tenant database schema with row-level security in PostgreSQL and serverless API endpoints.",
        "Integrated ESC/POS thermal printing, kitchen display systems, and QR self-ordering workflows.",
      ],
      link: { label: "frogrest.com", href: "https://frogrest.com" },
    },
    {
      id: "exp-vfx",
      role: "Video Editing & VFX Creator",
      company: "Independent / Creative Production",
      period: "2022 - Present",
      type: "work",
      description:
        "Produce high-impact visual, motion graphics, and cinematic video content utilizing Unreal Engine rendering and modern post-production suites.",
      highlights: [
        "Produce cinematic visual content using After Effects, Unreal Engine, and Sony Vegas.",
        "Combine real-time game engine rendering with video post-production workflows for dynamic storytelling.",
      ],
    },
    {
      id: "exp-devcon",
      role: "Developer Community Member",
      company: "DevCon Philippines",
      period: "2025 - Present",
      type: "community",
      description:
        "Actively engaging with the Philippine tech ecosystem and software developer community.",
      highlights: [
        "Participate in the Philippine developer community and collaborative technology activities.",
        "Collaborate on tech sharing sessions, developer meetups, and open-source initiatives.",
      ],
    },
  ] as ExperienceItem[],
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Computer Science",
    period: "2022 - 2026",
    coursework: [
      "Algorithms & Data Structures",
      "Database Management Systems",
      "Full-Stack Web Development",
      "Software Engineering",
      "Game Prototyping & Development",
      "Operating Systems & Networks",
    ],
  } as EducationItem,
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
};
