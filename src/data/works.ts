import { Work } from "@/types";

export const worksData: Work[] = [
  {
    id: "Portfolio-Website",
    title: "Takuto Maekawa's Portfolio",
    description:
    "いまご覧いただいているPortfolioサイトです。\nVercel上にデプロイしており、React, Next.js, TypeScript, Tailwind CSSを用いて作成しました。",
    imageUrl: "", // 今回はプレースホルダーで表示
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "http://localhost:3000",
    githubUrl: "https://github.com/Malin502/portfolio",
  },
  {
    id: "Tic-Tac-Toe-AI",
    title: "Tic Tac Toe AI",
    description:
      "三目並べを強化学習で学習するAIエージェントをPythonで実装しました。\nQ学習を用いて自己対戦により最適な戦略を獲得します。初めて作成した強化学習モデルです。",
    imageUrl: "",
    tags: ["Python", "Reinforcement Learning", "Q-Learning"],
    githubUrl: "https://github.com/Malin502/ReinforcementLearning-Tic-Tac-Toe",
  },
  {
    id: "recognize-handwritten-digits",
    title: "英字手書き文字認識",
    description:
      "手書き英字文字を認識するモデルを作成しました。ニューラルネットワークを用いて高精度な認識を実現しています。EMNISTデータセットを使用して学習・評価を行いました。",
    imageUrl: "",
    tags: ["Python", "Neural Network", "Computer Vision"],
    githubUrl: "https://github.com/Malin502/recognition-of-letters",
  },
];
