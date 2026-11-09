"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { researchData } from "@/data/research";
import { cn } from "@/lib/utils";
import type { ResearchId } from "@/types";

export const Research = () => {
  const t = useTranslations("Research");
  // どのアイテムが開いているかを管理（初期値は最初のID）
  const [openId, setOpenId] = useState<ResearchId | null>(researchData[0].id);
  const toggleOpen = (id: ResearchId) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section id="research" className="py-24 bg-sky-50"> 
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2">{t("title")}</h2>
          <div className="w-12 h-1 bg-turquoise mx-auto"></div>
        </div>
        <div className="space-y-4">
          {researchData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* ヘッダー（タイトル部分） */}
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4 min-w-0">
                    <h3 className="text-lg font-bold">{t(`items.${item.id}.title`)}</h3>
                    <span className="mt-1 md:mt-0 w-fit text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-semibold shrink-0">
                      {t(`items.${item.id}.status`)}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "text-gray-400 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {/* ボディ（詳細部分） */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed mt-6 mb-6">
                          {t(`items.${item.id}.description`)}
                        </p>
                        {/* リンク */}
                        {item.href && (
                          <div className="text-center">
                            <a
                              href={item.href}
                              className="inline-flex items-center text-turquoise hover:text-teal font-medium transition-colors text-sm"
                            >
                              {t("linkLabel")}
                              <ArrowUpRight className="ml-1 w-4 h-4" />
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};