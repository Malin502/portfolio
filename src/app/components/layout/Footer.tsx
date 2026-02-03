"use client";

import React from "react";
import { PROFILE } from "@/data/profile";

export const Footer = () => {
  const year = new Date().getFullYear();

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-darkgray)] text-white">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-lg font-semibold">
          © {year} {PROFILE.nameEn} All Rights Reserved.
        </p>
        <button
          type="button"
          onClick={handleTopClick}
          className="text-white font-bold tracking-wider hover:opacity-80 transition-opacity"
          aria-label="Back to top"
        >
          TOP
        </button>
      </div>
    </footer>
  );
};
