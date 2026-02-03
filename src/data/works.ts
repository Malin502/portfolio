import { Work } from "@/types";

export const worksData: Work[] = [
  {
    id: "Portfolio-Website",
    title: "Malin's Portfolio",
    description:
    "いまご覧いただいているPortfolioサイトです。\nVercel上にデプロイしており、Next.js + Tailwind CSSで構築し、レスポンシブかつ多言語対応を実現しました。",
    imageUrl: "/images/works/portfolio.png", 
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://malin-portfolio.vercel.app",
    githubUrl: "https://github.com/Malin502/portfolio",
  },
  {
    id: "Tic-Tac-Toe-AI",
    title: "Tic Tac Toe AI",
    description:
      "三目並べを強化学習で学習するAIエージェントをPythonで実装しました。Q学習を用いて自己対戦により最適な戦略を獲得します。初めて作成した強化学習モデルです。",
    imageUrl: "/images/works/tictactoe.png",
    tags: ["Python", "Reinforcement Learning", "Q-Learning"],
    githubUrl: "https://github.com/Malin502/ReinforcementLearning-Tic-Tac-Toe",
  },
  {
    id: "recognize-handwritten-digits",
    title: "英字手書き文字認識",
    description:
      "手書き英字文字を認識するモデルを作成しました。ニューラルネットワークを用いて高精度な認識を実現しています。EMNISTデータセットを使用して学習・評価を行いました。",
    imageUrl: "/images/works/handwriting.png",
    tags: ["Python", "Neural Network", "Computer Vision"],
    githubUrl: "https://github.com/Malin502/recognition-of-letters",
  },
];
