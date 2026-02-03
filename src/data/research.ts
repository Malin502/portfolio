import { Research } from "@/types";
export const researchData: Research[] = [
    {
        id: "1",
        title: "HAR (Human Activity Recognition) の欠測補完技術の提案",
        highlights: [
            { title: "課題", description: "既存モデルでは欠測がある場合に予測精度が低下する" },
            { title: "手法", description: "オートエンコーダとCGANを組み合わせた欠測補完手法" },
            { title: "実験", description: "欠測がある場合でも同程度の予測精度を達成" },
            { title: "貢献", description: "これによりリアルタイムな欠測補完が可能" },
        ],
        overview: "HAR (Human Activity Recognition) の欠測補完技術の提案",
    },
    {
        id: "2",
        title: "従属的因果発見手法NNRGLの提案",
        highlights: [
            { title: "課題", description: "既存の因果発見手法は多次元の解析が困難であり、かつ精度が低い傾向がある" },
            { title: "手法", description: "ニューラルネットワークとグループラッソを組み合わせた因果発見手法" },
            { title: "実験", description: "既存の因果発見手法に比べ、より手軽に高い精度の結果" },
            { title: "貢献", description: "多次元データに対してより効率的に因果発見が可能になる" },
        ],
        overview: "従属的因果発見手法NNRGLの提案",
    },
    {
        id: "3",
        title: "ネットワークフロー上の攻撃を不均衡データとして扱う手法の提案",
        highlights: [
            { title: "課題", description: "サイバー攻撃は滅多に起こるものではなく、AIを学習させようにも不均衡データとなり性能が低下する" },
            { title: "手法", description: "サイバー攻撃を不均衡データとして扱うことにより精度の向上を図る" },
            { title: "実験", description: "実験中です" },
            { title: "貢献", description: "実験中です" },
        ],
        overview: "詳細な内容はまだありません。",
    },
];