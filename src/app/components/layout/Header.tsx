"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAV_ITEMS = [
    { key: "profile", href: "#profile" },
    { key: "research", href: "#research" },
    { key: "publications", href: "#publications" },
    { key: "works", href: "#works" },
    { key: "experience", href: "#experience" },
    { key: "skill", href: "#skill" },
    { key: "future", href: "#future" },
    { key: "contact", href: "#contact" }
] as const;

export const Header = () => {
    const t = useTranslations("Header");
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
                {/* 名称（クリックでトップスクロール） */}
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label={t("scrollTop")}
                    className="text-2xl font-bold tracking-tight cursor-pointer hover:text-[var(--color-turquoise)] transition-colors"
                >
                    {t("title", { name: PROFILE.nameEn })}
                </button>
                {/* ナビゲーション */}
                <nav className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            className="text-xs xl:text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                        >
                            {t(`nav.${item.key}`)}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-turquoise transition-all group-hover:w-full" />
                        </a>
                    ))}
                    {/* 言語切り替え */}
                    <LocaleSwitcher />
                </nav>
                {/* lg 未満: ハンバーガー */}
                <div className="flex lg:hidden items-center gap-3">
                    <LocaleSwitcher />
                    <button
                        type="button"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        aria-label={menuOpen ? t("menuClose") : t("menuOpen")}
                        className="p-2 text-xl leading-none"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <nav
                    id="mobile-nav"
                    className="lg:hidden mt-2 bg-background/95 backdrop-blur-md shadow-sm"
                >
                    <ul className="container mx-auto px-6 py-3 grid grid-cols-2 gap-x-6">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.key}>
                                <a
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t(`nav.${item.key}`)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};
