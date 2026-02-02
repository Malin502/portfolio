"use client";
import React from "react";
import { worksData } from "@/data/works";
import { useRouter } from "next/navigation";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export const Works = () => {
  const router = useRouter();

  const handleCardClick = (link?: string) => {
    if (!link) return;
    const isExternal = /^https?:\/\//.test(link);
    if (isExternal) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      router.push(link);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, link?: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(link);
    }
  };

  return (
    <section id="works" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2">WORKS</h2>
          <div className="w-12 h-1 bg-turquoise mx-auto"></div>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work, index) => {
            const clickable = !!work.link;
            return (
            <motion.div
              key={work.id}
              role={clickable ? "button" : undefined}
              tabIndex={clickable ? 0 : undefined}
              aria-disabled={!clickable}
              onClick={clickable ? () => handleCardClick(work.link) : undefined}
              onKeyDown={clickable ? (e: React.KeyboardEvent<HTMLDivElement>) => handleKeyDown(e, work.link) : undefined}
              className={`bg-background rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col ${clickable ? "cursor-pointer transition-all hover:shadow-lg hover:border-turquoise hover:-translate-y-0.5" : "cursor-default"}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.12, ease: "easeOut" }}
            >
              {/* サムネイル領域 */}
              <div className="h-44 bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700"/>

              {/* 本文 */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-5">
                  {work.description}
                </p>

                {/* タグ */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, idx) => (
                      <span
                        key={`${work.id}-tag-${idx}`}
                        className="px-3 py-1 text-sm rounded-full border border-gray-300 text-gray-700 bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {work.githubUrl && (
                    <a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-600 hover:text-black"
                      aria-label="Open GitHub repository"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );})}
        </div>
      </div>
    </section>
  );
};
