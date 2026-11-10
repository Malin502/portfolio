// 文面は src/messages/*.json に移動。ここには言語に依存しない構造データのみを残す。

export type SkillCategory = 'Language' | 'Framework' | 'Cloud' | 'Tool' | 'Other';

// messages のキーに使う ID（リテラルにして t() のキーを型チェックする）
export type SkillId =
  | 'python' | 'java' | 'html' | 'css' | 'javascript' | 'typescript'
  | 'react' | 'nextjs' | 'tailwind' | 'aws' | 'mysql' | 'github'
  | 'vscode' | 'docker' | 'blender' | 'pytorch' | 'kubernetes';
export type QualificationId = 'AP' | 'TOEIC' | 'DL-G' | 'FE';
export type ExperienceId = 'exp-001' | 'exp-002' | 'exp-003' | 'exp-004';
export type WorkId = 'NEXUS' | 'Homelab' | 'Portfolio-Website';
export type OtherWorkId = 'Tic-Tac-Toe-AI' | 'recognize-handwritten-digits';
export type ResearchId = '1' | '2' | '3';
export type FutureId = '1' | '2' | '3';

//ナビゲーションメニュー
export interface NavItem {
  label: string;
  href: string;
};

//Hero
export interface Hero {
  nameEn: string;
}

//プロフィール情報
export interface Profile {
  nameEn: string;
  nameJp: string;
  skills: string[];
};

//スキル
export interface Skill {
  id: SkillId;
  name: string;
  tag: SkillCategory;
  icon: React.ElementType;
  experience: string; // 経験期間
}

//資格
export interface Qualification {
  id: QualificationId;
  date?: string; // 時期が未確定の資格は省略
  icon?: React.ElementType;
}

//実務経験
export interface Experience {
  id: ExperienceId;
  skills: string[]; //使用技術 ["AWS","React","TypeScript"]
}

//制作実績
export interface Work {
  id: WorkId | OtherWorkId;
  imagePath?: string;
  tags: string[];
  link?: string;
  githubUrl?: string;
}

//研究
export interface Research {
  id: ResearchId;
  href?: string; // 関連セクションへのアンカー
}

//Future
export interface FutureGoal {
  id: FutureId;
}
