import { Experience } from "@/types";

// 文面（period / title / company / description）は messages の Experience 名前空間（items.<id>）
export const experiencesData: Experience[] = [
  {
    id: "exp-001",
    skills: ["Spring Boot", "Java", "MySQL", "Docker", "Github", "AWS"],
  },
  {
    id: "exp-002",
    skills: ["Python", "PyTorch", "Pandas", "NumPy", "Matplotlib", "LaTeX"],
  },
  {
    id: "exp-003",
    skills: ["Spring Boot", "Java", "React", "MySQL", "GitHub"],
  },
  {
    id: "exp-004",
    skills: ["Node.js", "vercel", "GitHub"],
  }
];
