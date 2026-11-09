import { SkillGroup } from "@/types";
import {
  SiPython, SiTypescript, SiPytorch, SiNumpy, SiPandas,
  SiKubernetes, SiDocker, SiLinux, SiProxmox, SiCloudflare, SiGithubactions,
  SiPrometheus, SiGrafana, SiNextdotjs, SiSpringboot, SiTailwindcss, SiLatex,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// 説明文は messages の Skills 名前空間（groups.<id>）
export const skillGroups: SkillGroup[] = [
  { id: "languages", items: [
    { name: "Python", icon: SiPython },
    { name: "TypeScript / JavaScript", icon: SiTypescript },
    { name: "Java", icon: FaJava },
  ]},
  { id: "ml", items: [
    { name: "PyTorch", icon: SiPytorch },
    { name: "NumPy", icon: SiNumpy },
    { name: "pandas", icon: SiPandas },
    { name: "Matplotlib" },
  ]},
  { id: "infra", items: [
    { name: "Kubernetes (k3s)", icon: SiKubernetes },
    { name: "Docker", icon: SiDocker },
    { name: "Linux", icon: SiLinux },
    { name: "Proxmox", icon: SiProxmox },
    { name: "Cloudflare", icon: SiCloudflare },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Prometheus", icon: SiPrometheus },
    { name: "Grafana", icon: SiGrafana },
  ]},
  { id: "web", items: [
    { name: "Next.js / React", icon: SiNextdotjs },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ]},
  { id: "research", items: [
    { name: "LaTeX", icon: SiLatex },
    { name: "Reproducibility" },
    { name: "English papers" },
  ]},
];
