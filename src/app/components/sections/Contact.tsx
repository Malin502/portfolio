"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";

export const Contact = () => {
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
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "送信に失敗しました");
      setStatus("送信しました。ありがとうございます！");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus(err.message ?? "送信に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Title block like the first image */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-darkgray">CONTACT</h2>
          <div className="mt-3 mx-auto h-1 w-20 bg-turquoise rounded-full" />
          <p className="mt-8 text-gray-500 leading-relaxed">
            最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。
          </p>
          <p className="text-gray-500 leading-relaxed">
            もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
          </p>
        </div>

        {/* Form block like the second image */}
        <div className="bg-white/60 rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-gray-500 mb-2">Name</label>
              <input
                className="border-b border-gray-300 bg-transparent p-3 focus:outline-none focus:border-turquoise"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-500 mb-2">Email</label>
              <input
                type="email"
                className="border-b border-gray-300 bg-transparent p-3 focus:outline-none focus:border-turquoise"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="text-gray-500 mb-2">Comment</label>
              <textarea
                className="border-b border-gray-300 bg-transparent p-3 min-h-32 focus:outline-none focus:border-turquoise"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="メッセージを入力してください"
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
                {loading ? "SENDING..." : "SEND"}
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
