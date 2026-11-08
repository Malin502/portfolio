import React from "react";
import Image from "next/image";

import { getTranslations } from "next-intl/server";

import { PROFILE } from "@/data/profile";

const HISTORY_KEYS = ["1", "2", "3", "4"] as const;

export const Profile = async () => {
  const t = await getTranslations("Profile");
  return (
    <section id="profile" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-wider inline-block border-b-4 border-turquoise pb-2">
            {t("title")}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          {/* 左側: プロフィールカード */}
          <div className="w-full md:w-1/3 bg-background shadow-lg rounded-3xl p-8 flex flex-col items-center border border-gray-100">
            {/* 円形アイコン画像 */}
            <div className="relative w-60 h-60 lg:w-50 lg:h-50 mb-8">
                <div className="absolute inset-0 bg-gray-200 rounded-full animate-blob mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
                    <Image src="/images/hero.png" alt={t("imageAlt")} fill className="object-cover" priority />
                </div>
            </div>
            
            <h3 className="text-xl font-bold mb-1">{PROFILE.nameEn}</h3>
            <p className="text-gray-500 mb-6">{PROFILE.nameJp}</p>
            {/* スキルタグ */}
            <div className="flex gap-2">
              {PROFILE.skills.map((skill, index) => (
                <span key={index} className="border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* 右側: テキストエリア */}
          <div className="w-full md:w-1/2 space-y-8 ml-10">
            {/* Introduction */}
            <div>
              <h3 className="text-xl font-bold text-turquoise border-l-4 border-turquoise pl-3 mb-3">
                {t("introduction")}
              </h3>
              <p className="text-muted-foreground leading-loose whitespace-pre-wrap">
                {t("description")}
              </p>
            </div>
            {/* History */}
            <div>
              <h3 className="text-xl font-bold text-turquoise border-l-4 border-turquoise pl-3 mb-3">
                {t("history")}
              </h3>
              <ul className="list-disc pl-6 history-list">
                {HISTORY_KEYS.map((key) => (
                  <li key={key} className="mb-1">
                    {t(`historyItems.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};