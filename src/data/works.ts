import { Work } from "@/types";

// 文面（title / description）は messages の Works 名前空間（items.<id>）
export const worksData: Work[] = [
  {
    id: "NEXUS",
    tags: ["Kubernetes (k3s)", "Python", "LLM Agents", "Discord API", "GitHub Actions"],
    githubUrl: "https://github.com/Malin502/Agent-core",
  },
  {
    id: "Homelab",
    tags: ["Proxmox", "k3s", "Prometheus", "Grafana", "GitOps", "Cloudflare Tunnel"],
  },
  {
    id: "Portfolio-Website",
    imagePath: "/images/works/portfolio.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    link: "https://malin-portfolio.vercel.app",
    githubUrl: "https://github.com/Malin502/portfolio",
  },
];

// 旧作品。"Other projects" として小さく掲載
export const otherWorksData: Work[] = [
  {
    id: "Tic-Tac-Toe-AI",
    tags: ["Python", "Q-Learning"],
    githubUrl: "https://github.com/Malin502/ReinforcementLearning-Tic-Tac-Toe",
  },
  {
    id: "recognize-handwritten-digits",
    tags: ["Python", "Neural Network"],
    githubUrl: "https://github.com/Malin502/recognition-of-letters",
  },
];
