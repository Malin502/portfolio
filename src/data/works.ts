import { Work } from "@/types";

// 文面（title / description）は messages の Works 名前空間（items.<id>）
export const worksData: Work[] = [
  {
    id: "Portfolio-Website",
    imagePath: "/images/works/portfolio.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://malin-portfolio.vercel.app",
    githubUrl: "https://github.com/Malin502/portfolio",
  },
  {
    id: "Tic-Tac-Toe-AI",
    tags: ["Python", "Reinforcement Learning", "Q-Learning"],
    githubUrl: "https://github.com/Malin502/ReinforcementLearning-Tic-Tac-Toe",
  },
  {
    id: "recognize-handwritten-digits",
    tags: ["Python", "Neural Network", "Computer Vision"],
    githubUrl: "https://github.com/Malin502/recognition-of-letters",
  },
];
