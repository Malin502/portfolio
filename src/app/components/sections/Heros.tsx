"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

import { HERO } from "@/data/hero";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-background relative
        overflow-hidden pt-20 lg:pt-0">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                {/* 左側: テキスト*/}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1">

                    {/* 肩書き */}
                    <h2 className="text-turquoise font-bold text-lg mb-4 tracking-wide">
                        {HERO.role}
                    </h2>

                    {/* 名前 */}
                    <h1 className="text-darkgray font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                        {HERO.nameEn}
                    </h1>

                    {/* ひとこと */}
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-lg">
                        {HERO.comment}
                    </p>

                    {/* ボタン */}
                    <div className="flex flex-wrap gap-4">
                        {/*作品を見る*/}
                        <Link href="#works" className="px-6 py-3 bg-turquoise text-white font-bold rounded-full hover:bg-teal transition-colors shadow-lg shadow-turquoise/20 flex items-center gap-2">
                            作品を見る
                            <ArrowRight size={18} />
                        </Link>

                        {/*スキルセットを見る*/}
                        <Link href="#skill" className="px-6 py-3 border-2 border-turquoise text-turquoise font-bold rounded-full hover:bg-turquoise/10 transition-colors">
                            スキルセット
                        </Link>

                        {/* Githubボタン */}
                        <a href="https://github.com/Malin502" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-gray-300 text-gray-600 font-bold rounded-full hover:border-black hover:text-black transition-colors flex items-center gap-2">
                            <Github size={18} />
                            Github
                        </a>
                    </div>
                </motion.div>

                {/* 右側 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    {/* 円形装飾背景 */}
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-gray-200 rounded-full animate-blob mix-blend-multiply filter blur-xl opacity-70"></div>
                        {/* 画像本体 */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
                            <Image src="/images/hero.png" alt="Hero" fill className="object-cover" priority />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}