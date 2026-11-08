"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const HASH_KEY = "locale-switch-hash";

export const LocaleSwitcher = () => {
  const t = useTranslations("Header.language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // ロケール切替でツリーが再マウントされた後、保存しておいたハッシュを付け直す
  useEffect(() => {
    const saved = sessionStorage.getItem(HASH_KEY);
    if (!saved) return;
    sessionStorage.removeItem(HASH_KEY);
    const timer = setTimeout(() => {
      window.location.hash = saved;
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const switchTo = (next: (typeof routing.locales)[number]) => {
    if (next === locale) return;
    const hash = window.location.hash;
    if (hash) sessionStorage.setItem(HASH_KEY, hash);
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center ml-4 rounded overflow-hidden bg-black text-white text-xs font-bold"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            lang={l}
            onClick={() => switchTo(l)}
            aria-current={active ? "true" : undefined}
            className={`px-3 py-1.5 transition-colors ${
              active ? "bg-white/25" : "opacity-70 hover:opacity-100"
            }`}
          >
            {t(l)}
          </button>
        );
      })}
    </div>
  );
};
