"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { PROFILE } from "@/data/profile";

export const Footer = () => {
  const t = useTranslations("Common");
  const year = new Date().getFullYear();

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-darkgray)] text-white">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-lg font-semibold">
          {t("copyright", { year: String(year), name: PROFILE.nameEn })}
        </p>
        <button
          type="button"
          onClick={handleTopClick}
          className="text-white font-bold tracking-wider hover:opacity-80 transition-opacity"
          aria-label={t("backToTop")}
        >
          {t("top")}
        </button>
      </div>
    </footer>
  );
};
