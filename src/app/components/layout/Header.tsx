"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "PROFILE", href: "#profile" },
    { label: "RESEARCH", href: "#research" },
    { label: "SKILL", href: "#skill" },
    { label: "WORKS", href: "#works" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "FUTURE", href: "#future" },
    { label: "CONTACT", href: "#contact" }
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* 名称 */}
                <Link href="/" className="text-2xl font-bold tracking-tight">
                    Takuto Maekawa's Portfolio
                </Link>
                {/* ナビゲーション */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-turquoise transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    {/* 言語切り替えボタン */}
                    <button className="bg-black text-white text-xs px-3 py-1.5 rounded ml-4 font-bold">
                        JA / EN
                    </button>
                </nav>
            </div>
        </header>
    );
};
