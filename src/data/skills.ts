import { Skill } from "@/types";
import { 
  Code2, 
  Database, 
  Globe, 
  Shield, 
  Cpu,
  FileCode,
  GitBranch,
  Cloud
} from "lucide-react";


export const skillsData: Skill[] = [
  {
    name: "Python",
    tag: "Language",
    icon: Code2,
    level: 4,
    experience: "36 Months",
    description: "主に研究で使用。PytorchやNumpy、matplotlib、pandasなどのライブラリを用いてデータ分析や機械学習を行っています。",
  },
  {
    name: "Java",
    tag: "Language",
    icon: Code2,
    level: 5,
    experience: "48 Months",
    description: "大学で2年間学びました。アルバイトでSpring Bootを使用したバックエンド開発を行っています。",
  },
  {
    name: "HTML",
    tag: "Language",
    icon: Globe,
    level: 3,
    experience: "12 Months",
    description: "セマンティックHTMLを意識したマークアップが可能。",
  },
  {
    name: "React",
    tag: "Framework",
    icon: Globe,
    level: 2,
    experience: "12 Months",
    description: "Next.js、TypeScriptと組み合わせたフロントエンド開発ができます。",
  },
  {
    name: "Database",
    tag: "Tool",
    icon: Database,
    level: 3,
    experience: "6 Months",
    description: "PostgreSQL、MySQLを使用したデータベース設計・運用。",
  },
  {
    name: "AWS",
    tag: "Tool",
    icon: Cloud,
    level: 3,
    experience: "6 Months",
    description: "EC2、S3、Lambda等を使用したインフラ構築。Redshiftを用いたデータ分析基盤の構築経験があります。",
  },
  {
    name: "Git",
    tag: "Tool",
    icon: GitBranch,
    level: 4,
    experience: "40 Months",
    description: "チーム開発でのバージョン管理、GitHub Actionsを使用したCI/CDの経験があります。チーム開発で必要な知識は一通り理解しています。",
  },
  {
    name: "AI/ML",
    tag: "Other",
    icon: Cpu,
    level: 3,
    experience: "15 Months",
    description: "研究だけでなく個人的に強化学習や自然言語処理の勉強も行っています。",
  },
];