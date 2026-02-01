"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { researchData } from "@/data/research";
import { cn } from "@/lib/utils";
export const Research = () => {
  // どのアイテムが開いているかを管理（初期値は最初のID）
  const [openId, setOpenId] = useState<string | null>(researchData[0].id);
  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section id="research" className="py-24 bg-sky-50/50"> {/* 薄い水色背景 */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2">RESEARCH</h2>
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
                  <h3 className="text-lg font-bold">{item.title}</h3>
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
                        {/* 4つの見出し */}
                        {item.highlights.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6">
                            {item.highlights.map((h, i) => (
                              <div key={i}>
                                <h4 className="font-bold text-sm mb-1">{h.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {h.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Overviewボックス */}
                        <div className="bg-gray-200/50 rounded-xl p-8 min-h-[200px] flex items-center justify-center mb-6">
                          <p className="font-medium text-gray-700">
                             {item.overview || "Overview"}
                          </p>
                        </div>
                        {/* リンク */}
                        {item.link && (
                          <div className="text-center">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-turquoise hover:text-teal font-medium transition-colors text-sm"
                            >
                              論文詳細・スライドを見る
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