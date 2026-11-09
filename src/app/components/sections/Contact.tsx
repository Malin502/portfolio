"use client";

import React, { useState } from "react";
import { Mail, Github } from "lucide-react";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("Contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        // サーバのエラー文は英語固定のため、ステータスからロケール別の文言を選ぶ
        setStatus(res.status === 400 ? t("invalid") : t("failure"));
        return;
      }
      setStatus(t("success"));
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus(t("failure"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Title block like the first image */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-darkgray">{t("title")}</h2>
          <div className="mt-3 mx-auto h-1 w-20 bg-turquoise rounded-full" />
          <p className="mt-8 text-gray-500 leading-relaxed">
            {t("intro1")}
          </p>
          <p className="text-gray-500 leading-relaxed">
            {t("intro2")}
          </p>
          <a
            href="https://github.com/Malin502"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-turquoise hover:text-teal font-medium transition-colors"
          >
            <Github size={18} />
            {t("github")}
          </a>
        </div>

        {/* Form block like the second image */}
        <div className="bg-white/60 rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-gray-500 mb-2">{t("nameLabel")}</label>
              <input
                className="border-b border-gray-300 bg-transparent p-3 focus:outline-none focus:border-turquoise"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("namePlaceholder")}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-500 mb-2">{t("emailLabel")}</label>
              <input
                type="email"
                className="border-b border-gray-300 bg-transparent p-3 focus:outline-none focus:border-turquoise"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                required
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="text-gray-500 mb-2">{t("messageLabel")}</label>
              <textarea
                className="border-b border-gray-300 bg-transparent p-3 min-h-32 focus:outline-none focus:border-turquoise"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("messagePlaceholder")}
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="px-10 py-3 rounded-full bg-turquoise text-white font-bold hover:bg-teal transition-colors flex items-center gap-2"
              >
                <Mail size={18} />
                {loading ? t("sending") : t("send")}
              </button>
            </div>
          </form>
          {status && (
            <p className="mt-6 text-center text-gray-600">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
};
