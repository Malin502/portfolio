import { Experience } from "@/types";

export const experiencesData: Experience[] = [
  {
    id: "exp-001",
    period: "2025.07 - 現在",
    title: "バックエンドエンジニア",
    company: "任天堂株式会社",
    description:
      "Spring Bootを用いた社内向け管理ツールの開発・保守を担当。API設計、データベース設計、パフォーマンス最適化に従事。\nDockerを活用した開発環境の構築・運用や、AWSの各種サービス利用も経験。",
    skills: ["Spring Boot", "Java", "MySQL", "Docker", "Github", "AWS"],
  },
  {
    id: "exp-002",
    period: "2023.10 - 現在",
    title: "MLエンジニア・研究補助",
    company: "University Lab",
    description:
      "HAR（人間活動認識）の欠測補完モデルを研究開発。オートエンコーダ/CGAN を用いた実験設計・評価・可視化を担当。\nNNを用いた因果発見手法のPyTorch実装・評価を担当。\nPythonを用いたデータ前処理、モデル実装、論文執筆に従事。",
    skills: ["Python", "PyTorch", "Pandas", "NumPy", "Matplotlib", "LaTeX"],
  },
  {
    id: "exp-003",
    period: "2025.09",
    title: "短期Web開発インターン",
    company: "メディアリンク株式会社",
    description:
      "Spring BootとReactを用いた音声要約Webアプリケーションの開発インターン。\nバックエンドAPIの設計・実装、フロントエンドとの連携を担当。",
    skills: ["Spring Boot", "Java", "React", "MySQL", "GitHub"],
  },
  {
    id: "exp-004",
    period: "2025.09",
    title: "サービス創出ハッカソン型インターン",
    company: "Visionalグループ",
    description:
      "チームでアイデア出しからプロトタイプ開発までを行うハッカソン型インターン。",
    skills: ["Node.js", "Express", "AWS", "GitHub"],
  }
];
