export interface Project {
  id: number;
  title: string;
  role: string;
  category: string;
  description: string;
  thumbnail: string;
  thumbnailAlt: string;
  tagline: string;
  tag: string;
  imageFull: string;
  certificate: string | null;
  githubLink: string;
}

/**
 * All portfolio projects live here.
 * Add a new object to automatically generate a new card + modal.
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Trash-Bean",
    role: "Full Stack Developer",
    category: "Web Development",
    description:
      "A comprehensive IoT monitoring platform for smart waste management. Features real-time dashboards, sensor data visualization, multi-user roles, and automated reporting. I was responsible for the entire backend architecture and frontend integration.",
    thumbnail: "/assets/works/knu.jpeg",
    thumbnailAlt: "Smart Trash-Bean project thumbnail",
    tagline: "Website for monitoring the trash bin based on IoT sensors.",
    tag: "Full Stack Development",
    imageFull: "/assets/works/winner.png",
    certificate: "/assets/sertificates/sertif.png",
    githubLink: "https://github.com/ardiano27/Monitoring-TrashScan",
  },
  {
    id: 2,
    title: "Konekin Website",
    role: "Full Stack Developer",
    category: "Frontend Tooling",
    description:
      "A platform that connects creative workers with small businesses (UMKM). My focus was on creating high-converting landing page components and ensuring accessibility compliance. Built with a clean, intuitive UI for non-technical users.",
    thumbnail: "/assets/works/konekin.png",
    thumbnailAlt: "Konekin Website project thumbnail",
    tagline: "Platform that connects the creative worker and UMKM.",
    tag: "UI/UX & Frontend",
    imageFull: "/assets/works/konekin2.png",
    certificate: null,
    githubLink: "https://github.com/ardiano27/Website-Konekin",
  },
];

// ── Persona data (drives Hero toggle) ────────────────────────────────────
export const personas = {
  developer: {
    label: "Developer",
    image: "/assets/images/develop.png",
    subtitle: "Full Stack Developer",
    description:
      "crafting robust digital solutions with clean code and logical thinking.",
    tools: [
      { src: "/assets/tools/vscode.png", alt: "VS Code" },
      { src: "/assets/tools/react.png", alt: "React" },
      { src: "/assets/tools/nodejs.png", alt: "Node.js" },
    ],
  },
  designer: {
    label: "Designer",
    image: "/assets/images/graphic.png",
    subtitle: "Graphic Designer",
    description: "blending colors and shapes to tell compelling visual stories.",
    tools: [
      { src: "/assets/tools/canva.png", alt: "Canva" },
      { src: "/assets/tools/figma.png", alt: "Figma" },
      { src: "/assets/tools/pinterest.png", alt: "Pinterest" },
    ],
  },
} as const;

// ── Sneak peek gallery images ─────────────────────────────────────────────
export const sneakPeekImages = [
  { src: "/assets/design/konekin.png", alt: "Konekin design" },
  { src: "/assets/design/girl.png", alt: "Girl illustration" },
  { src: "/assets/design/rep.png", alt: "Design work" },
  { src: "/assets/design/sertijab.png", alt: "Certificate design" },
  { src: "/assets/images/develop.png", alt: "Developer" },
  { src: "/assets/images/graphic.jpg", alt: "Graphic work" },
  { src: "/assets/works/knu.jpeg", alt: "Trash-Bean project" },
  { src: "/assets/works/konekin.png", alt: "Konekin project" },
];