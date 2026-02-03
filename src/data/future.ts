import { FutureGoal } from "@/types";

// FUTUREセクションの上段カード
export const futureVision = "信頼されるAIを、社会の裏側に届ける";

// 下段の3カード
export const futureGoals: FutureGoal[] = [
  {
    id: "1",
    title: "Explainability",
    description:
      "精度が高いだけでは、安心して使われるAIにはならない。なぜその判断に至ったのか、どこまで信じていいのか。AIの振る舞いを説明できることを大切にしています。",
  },
  {
    id: "2",
    title: "Robust Architecture",
    description:
      "表に出ないシステムほど、止まってはいけない。一時的な精度や流行ではなく、長く動き続けることを前提にした設計を大切にします。",
  },
  {
    id: "3",
    title: "Full Stack Perspective",
    description:
      "モデルを作ることが、ゴールではない。そのAIが、どこで使われ、誰に届き、どう運用されるのか。バックエンドやインフラまで視野に入れ、社会で機能するAIを目指します。",
  },
];
