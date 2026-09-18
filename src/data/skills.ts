export interface CreativeMediaItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  videoUrl?: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: "frontend" | "backend" | "programming" | "creative" | "tools";
  description: string;
  skills: string[];
  media?: CreativeMediaItem[];
}

export const defaultSkillFolders: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    iconName: "frontend",
    description: "Modern declarative UI, state architecture, and hardware-accelerated interfaces.",
    skills: ["React 19", "TypeScript", "JavaScript", "Tailwind CSS v4", "HTML5", "CSS3 / Canvas"],
  },
  {
    id: "backend",
    name: "Backend",
    iconName: "backend",
    description: "High-throughput APIs, relational databases, and serverless compute runtimes.",
    skills: ["Node.js", "Hono", "REST APIs", "PostgreSQL", "SQL", "Supabase"],
  },
  {
    id: "programming",
    name: "Programming",
    iconName: "programming",
    description: "Multi-paradigm programming across systems, desktop, and game logic.",
    skills: ["Python", "C#", "Java", "C/C++", "Algorithm Design"],
  },
  {
    id: "creative",
    name: "Creative & VFX",
    iconName: "creative",
    description: "High-end visual storytelling, video editing, game engines, and motion graphics.",
    skills: ["Unreal Engine", "After Effects", "Premiere Pro", "Video Editing", "Motion Graphics", "Photography"],
    media: [
      {
        id: "game-dev",
        title: "Unreal Engine Simulation",
        category: "Game Prototyping",
        description: "Interactive simulation with reactive AI behavior trees, character physics, and C++ performance modules.",
        image: "Images/Prepaview.jpg",
        tags: ["Unreal Engine 5", "C++", "Blueprints"],
        link: "https://frogrest.itch.io/prepaview",
        videoUrl: "https://www.youtube-nocookie.com/embed/v27Fh6bPfZI",
        badge: "Playable on itch.io",
      },
      {
        id: "video-vfx",
        title: "Video Post-Production & VFX",
        category: "Cinematic Editing",
        description: "High-impact visual edits, kinetic typography, and motion design in After Effects and Sony Vegas.",
        image: "Images/Cover.jpg",
        tags: ["After Effects", "Sony Vegas", "VFX"],
        videoUrl: "https://www.youtube-nocookie.com/embed/v27Fh6bPfZI",
        badge: "60 FPS Master",
      },
      {
        id: "cinematography",
        title: "Cinematography & Framing",
        category: "Visual Storytelling",
        description: "Atmospheric lighting composition, color science, and cinematic camera sequencing.",
        image: "Images/Base.png",
        tags: ["Composition", "Lighting", "Color Science"],
        badge: "Cinematic Grade",
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    iconName: "tools",
    description: "Version control, automated testing, modern toolchains, and developer environments.",
    skills: ["Git", "GitHub Actions", "Vite", "VS Code", "Playwright", "Docker"],
  },
];
