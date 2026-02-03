"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { skillsData } from "@/data/skills";
import { qualificationsData } from "@/data/qualifications";

export const Skill = () => {
    const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
    const [selectedTag, setSelectedTag] = useState("All");

    // タグの一覧を取得
    const tags = ["All", "Language", "Framework", "Cloud", "Tool", "Other"];

    // 選択されたタグに基づいてスキルをフィルタリング
    const filteredSkills = selectedTag === "All"
        ? skillsData
        : skillsData.filter(skill => skill.tag === selectedTag);

    return (
        <section id="skill" className="pt-24 pb-4 bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* セクションタイトル */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-wider mb-2">
                        SKILL
                    </h2>
                    <div className="w-12 h-1 bg-turquoise mx-auto"></div>
                </div>

                

                {/* スキルグリッド + 詳細表示 */}
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 mb-20 items-start">
                    {/* 左側: タグ + スキルアイコングリッド */}
                    <div className="flex flex-col gap-6">
                        {/* タグフィルター（左上） */}
                        <div className="flex flex-wrap gap-3">
                            {tags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${selectedTag === tag
                                            ? "bg-turquoise text-white"
                                            : "bg-white text-gray-600 hover:bg-gray-50"
                                        }
                  `}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        {/* スキルグリッド（左下） */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        <AnimatePresence mode="popLayout">
                            {filteredSkills.map((skill) => {
                                const Icon = skill.icon;
                                const isSelected = selectedSkill.name === skill.name;
                                return (
                                    <motion.button
                                        key={skill.name}
                                        layout
                                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.5, y: -20 }}
                                        transition={{
                                            duration: 0.3,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20
                                        }}
                                        onClick={() => setSelectedSkill(skill)}
                                        className={`
                      aspect-square rounded-2xl p-6 flex flex-col items-center justify-center
                      transition-all duration-300 border-2
                      ${isSelected
                                                ? "bg-white border-turquoise shadow-lg"
                                                : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                                            }
                    `}
                                    >
                                        <Icon className="w-10 h-10 mb-2 text-gray-800" />
                                        <span className="font-semibold text-sm text-center text-gray-800">{skill.name}</span>
                                    </motion.button>
                                );
                            })}
                        </AnimatePresence>
                        </div>
                    </div>
                    {/* 右側: 選択されたスキルの詳細 */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedSkill.name}
                            initial={{ opacity: 0, x: 30}}
                            animate={{ opacity: 1, x: 0}}
                            exit={{ opacity: 0, x: -30}}
                            transition={{
                                duration: 0.3,
                                type: "spring",
                            }}
                            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 min-h-[400px]"
                        >
                            {/* ヘッダー */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-16 h-16 bg-turquoise/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    {React.createElement(selectedSkill.icon, {
                                        className: "w-10 h-10 text-turquoise",
                                    })}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-1 text-gray-800">{selectedSkill.name}</h3>
                                    <p className="text-sm text-gray-500">{selectedSkill.tag}</p>
                                </div>
                            </div>

                            {/* レベル */}
                            <div className="mb-6">
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Level</p>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`w-5 h-5 ${star <= selectedSkill.level
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "fill-gray-200 text-gray-200"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* 経験期間 */}
                            <div className="mb-6">
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Experience</p>
                                <p className="text-xl font-bold text-gray-800">{selectedSkill.experience}</p>
                            </div>

                            {/* 説明 */}
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Description</p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {selectedSkill.description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/* 詳しくはこちらをご覧ください */}
                <div className="text-center mb-4">
                    <a href="#" className="text-turquoise hover:text-teal text-sm font-medium">
                        詳しくはこちらをご覧ください
                    </a>
                </div>
            </div>
        </section>
    );
};