import { Qualification } from "@/types";
import { Award } from "lucide-react";

// 資格名は messages の Qualifications 名前空間（items.<id>）
export const qualificationsData: Qualification[] = [
  /* 取得予定（未取得のため非表示）
   * SC (情報処理安全確保支援士) 2026/10
   * AWS-SAA (AWS Certified Solutions Architect – Associate) 2026/08
   * NW (ネットワークスペシャリスト) 2026/04
   */
  {
    id: "AP",
    date: "2025/10",
    icon: Award,
  },
  {
    id: "DL-G",
    date: "2025/07",
    icon: Award,
  },
  {
    id: "FE",
    date: "2025/05",
    icon: Award,
  },
  // TOEIC 715点：取得時期は未確定のため表示しない
  {
    id: "TOEIC",
    icon: Award,
  },
];
