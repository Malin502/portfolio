import { Skill } from "@/types";
import {
  SiPython,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiDocker,
} from 'react-icons/si';

import { FaJava, FaAws} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';

// 説明文は messages の Skills 名前空間（items.<id>）
export const skillsData: Skill[] = [
  { id: "python", name: "Python", tag: "Language", icon: SiPython, level: 4, experience: "36 Months" },
  { id: "java", name: "Java", tag: "Language", icon: FaJava, level: 5, experience: "48 Months" },
  { id: "typescript", name: "TypeScript", tag: "Language", icon: SiTypescript, level: 2, experience: "6 Months" },
  { id: "react", name: "React", tag: "Framework", icon: SiReact, level: 3, experience: "10 Months" },
  { id: "nextjs", name: "Next.js", tag: "Framework", icon: RiNextjsFill, level: 2, experience: "8 Months" },
  { id: "tailwind", name: "Tailwind CSS", tag: "Framework", icon: SiTailwindcss, level: 2, experience: "3 Months" },
  { id: "aws", name: "AWS", tag: "Cloud", icon: FaAws, level: 3, experience: "6 Months" },
  { id: "mysql", name: "MySQL", tag: "Tool", icon: SiMysql, level: 2, experience: "6 Months" },
  { id: "github", name: "Github", tag: "Tool", icon: SiGithub, level: 4, experience: "40 Months" },
  { id: "docker", name: "Docker", tag: "Tool", icon: SiDocker, level: 2, experience: "8 Months" },
];
