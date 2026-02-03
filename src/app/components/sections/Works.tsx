"use client";
import React from "react";
import { worksData } from "@/data/works";
import { useRouter } from "next/navigation";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      <div className="container mx-auto px-4 max-w-10xl">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkgray tracking-wider mb-2">WORKS</h2>
          <div className="w-16 h-1 bg-turquoise mx-auto rounded-full"></div>
        </div>

        {/* カードグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className={`group bg-background rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col ${clickable ? "cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5" : "cursor-default"}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.12, ease: "easeOut" }}
            >
              {/* サムネイル領域 */}
              <div className="relative h-44 bg-gray-200 overflow-hidden">
                {work.imageUrl && (
                  <Image
                    src={work.imageUrl}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                {/* ホバー時にグレーのオーバーレイ */}
                <div className="absolute inset-0 bg-gray-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-0" />
                {/* オーバーレイ：ホバー時に表示 */}
                {(work.githubUrl || work.link) && (
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    {work.githubUrl && (
                      <a
                        href={work.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Open GitHub repository"
                        className="w-10 h-10 rounded-full bg-white/90 text-black ring-1 ring-gray-300 shadow-sm flex items-center justify-center hover:text-turquoise hover:bg-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {work.link && (
                      <a
                        href={work.link}
                        target={/^https?:\/\//.test(work.link) ? "_blank" : undefined}
                        rel={/^https?:\/\//.test(work.link) ? "noopener noreferrer" : undefined}
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Open project site"
                        className="w-10 h-10 rounded-full bg-white/90 text-black ring-1 ring-gray-300 shadow-sm flex items-center justify-center hover:text-turquoise hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* 本文 */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-darkgray text-xl font-bold mb-2 transition-colors group-hover:text-turquoise">{work.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-3">
                  {work.description}
                </p>
                {/* タグ */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, idx) => (
                      <span
                        key={`${work.id}-tag-${idx}`}
                        className="px-2 py-1 text-xs rounded-sm border border-gray-300 text-darkgray bg-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );})}
        </div>
      </div>
    </section>
  );
};
