import { Skill } from "@/types";
import {
  SiPython,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiPytorch,
} from 'react-icons/si';

import { FaJava, FaAws} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';

// 説明文は messages の Skills 名前空間（items.<id>）
export const skillsData: Skill[] = [
  { id: "python", name: "Python", tag: "Language", icon: SiPython, experience: "36 Months" },
  { id: "pytorch", name: "PyTorch", tag: "Framework", icon: SiPytorch, experience: "12 Months" },
  { id: "java", name: "Java", tag: "Language", icon: FaJava, experience: "48 Months" },
  { id: "typescript", name: "TypeScript", tag: "Language", icon: SiTypescript, experience: "6 Months" },
  { id: "react", name: "React", tag: "Framework", icon: SiReact, experience: "10 Months" },
  { id: "nextjs", name: "Next.js", tag: "Framework", icon: RiNextjsFill, experience: "8 Months" },
  { id: "tailwind", name: "Tailwind CSS", tag: "Framework", icon: SiTailwindcss, experience: "3 Months" },
  { id: "aws", name: "AWS", tag: "Cloud", icon: FaAws, experience: "6 Months" },
  { id: "mysql", name: "MySQL", tag: "Tool", icon: SiMysql, experience: "6 Months" },
  { id: "github", name: "GitHub", tag: "Tool", icon: SiGithub, experience: "40 Months" },
  { id: "docker", name: "Docker", tag: "Tool", icon: SiDocker, experience: "8 Months" },
  { id: "kubernetes", name: "Kubernetes", tag: "Tool", icon: SiKubernetes, experience: "12 Months" },
];
