import { Research } from "@/types";

// 文面は messages の Research 名前空間（items.<id>）。3 は Publications と相互リンク
export const researchData: Research[] = [
    { id: "1" },
    { id: "2" },
    { id: "3", href: "#publications" },
];
