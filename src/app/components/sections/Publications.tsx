import React from "react";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, FileText } from "lucide-react";

// 会議名・著者順は未確定のため表示しない（最終確認で確定したら追記）
export const Publications = async () => {
  const t = await getTranslations("Publications");
  return (
    <section id="publications" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2">{t("title")}</h2>
          <div className="w-12 h-1 bg-turquoise mx-auto"></div>
        </div>
        <div className="bg-background rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex gap-4 items-start">
          <div className="w-12 h-12 flex-shrink-0 bg-turquoise/15 rounded-full flex items-center justify-center text-teal">
            <FileText size={22} aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-bold leading-snug mb-3">{t("paperTitle")}</h3>
            <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-semibold">
              {t("status")}
            </span>
            <div className="mt-4">
              <a
                href="#research"
                className="inline-flex items-center text-turquoise hover:text-teal font-medium transition-colors text-sm"
              >
                {t("relatedLink")}
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
