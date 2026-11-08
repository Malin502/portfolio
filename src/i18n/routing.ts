import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ja", "en"],
  defaultLocale: "ja",
  localePrefix: "always",
  // ロケール判定は行わない（/ は常に /ja へ）
  localeDetection: false,
  localeCookie: false,
  alternateLinks: false,
});
