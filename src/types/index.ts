export type SkillCategory = 'Language' | 'Framework' | 'Cloud' | 'Tool' | 'Other';

//ナビゲーションメニュー
export interface NavItem {
  label: string;
  href: string;
};

//Hero
export interface Hero {
  nameEn: string;
  role: string;
  comment: string;
}

//プロフィール情報
export interface Profile {
  nameEn: string;
  nameJp: string
  description: string;
  history: string[];
  skills: string[];
};

//スキル
export interface Skill {
  name: string;
  tag: SkillCategory;
  icon: React.ElementType;
  level: number; // 1から5
  experience: string; // 経験期間
  description: string;
}

//資格
export interface Qualification {
  id: string;
  name: string;
  date: string;
  icon?: React.ElementType;
}

//実務経験
export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  skills: string[]; //使用技術 ["AWS","React","TypeScript"]
}

//制作実績
export interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  githubUrl?: string;
}

//研究
export interface Research {
  id: string;
  title: string;
  highlights: {
    title: string;
    description: string;
  }[];
  overview: string;
  imageUrl?: string;
  link?: string;
}

//Future
export interface FutureGoal {
  id: string;
  title: string;
  description: string;
}