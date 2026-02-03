"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { experiencesData } from "@/data/experiences";

export const Experience = () => {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2">EXPERIENCE</h2>
          <div className="w-12 h-1 bg-turquoise mx-auto"></div>
        </div>

        {/* タイムライン */}
        <div className="relative pl-6 md:pl-10">
          {/* ライン */}
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-6">
            {experiencesData.map((exp, index) => {
              const isOpen = openSet.has(exp.id);
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="relative"
                >
                  {/* ノード */}
                  <div className="absolute -left-[22px] md:-left-7 top-5 w-4 h-4 rounded-full bg-turquoise ring-4 ring-white border border-turquoise" />

                  {/* アコーディオンカード */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {/* ヘッダー: 期間・タイトル・企業名 */}
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggle(exp.id)}
                      onKeyDown={(e) => onKeyDown(e, exp.id)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:gap-4 min-w-0">
                        <div className="flex items-center gap-2 text-gray-600 text-sm font-medium shrink-0">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold truncate">{exp.title}</h3>
                        <span className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-semibold shrink-0">
                          {exp.company}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden
                      />
                    </button>

                    {/* ボディ: 詳細/スキル */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((s, i) => (
                                <span
                                  key={`${exp.id}-skill-${i}`}
                                  className="px-2.5 py-1 text-xs rounded-full border border-gray-300 text-gray-700 bg-white"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
