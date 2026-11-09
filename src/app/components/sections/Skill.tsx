"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { skillGroups } from "@/data/skills";

export const Skill = () => {
    const t = useTranslations("Skills");
    return (
        <section id="skill" className="pt-24 pb-12 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* セクションタイトル */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-wider mb-2">{t("title")}</h2>
                    <div className="w-12 h-1 bg-turquoise mx-auto"></div>
                </div>

                {/* 領域別 */}
                <div className="space-y-5">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 grid gap-4 md:grid-cols-[200px_1fr]"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-darkgray">{t(`groups.${group.id}.title`)}</h3>
                                <p className="mt-1 text-xs text-gray-600 leading-relaxed">{t(`groups.${group.id}.description`)}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 content-start">
                                {group.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <span
                                            key={item.name}
                                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-background text-sm text-darkgray"
                                        >
                                            {Icon && <Icon className="w-4 h-4 text-turquoise" aria-hidden />}
                                            {item.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
