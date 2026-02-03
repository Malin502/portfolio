"use client";
import { motion } from "framer-motion";
import { futureVision, futureGoals } from "@/data/future";
import { Sparkles, Sprout, Rocket, Sun } from "lucide-react";

export const Future = () => {
  const labelConfig: Record<string, {
    icon: React.ElementType;
    badgeClass: string;
    cardClass: string;
  }> = {
    1: {
      icon: Sprout,
      badgeClass: "bg-mint/25 text-teal",
      cardClass: "hover:shadow-md",
    },
    2: {
      icon: Sparkles,
      badgeClass: "bg-mint/25 text-teal",
      cardClass: "hover:shadow-md",
    },
    3: {
      icon: Rocket,
      badgeClass: "bg-mint/25 text-teal",
      cardClass: "hover:shadow-md",
    },
  };
  return (
    <section id="future" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2">FUTURE</h2>
          <div className="w-12 h-1 bg-turquoise mx-auto"></div>
        </div>

        {/* 上段：ビジョンカード */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="mb-10"
        >
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm px-8 py-12 text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-mint/25 shadow-sm ring-4 ring-white flex items-center justify-center">
              <Sun className="w-7 h-7 text-teal" aria-hidden />
            </div>
            <p className="mt-4 md:mt-5 text-2xl md:text-3xl font-semibold">{futureVision}</p>
          </div>
        </motion.div>

        {/* 下段：3カード（Now / Next / Future） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {futureGoals.map((goal, idx) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`bg-white rounded-[28px] border border-gray-100 shadow-sm ${labelConfig[goal.id]?.cardClass ?? ""}`}
            >
              <div className="px-8 py-10 h-full flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ring-4 ring-white ${labelConfig[goal.id]?.badgeClass ?? "bg-mint/25"}`}>
                  {(() => {
                    const Icon = labelConfig[goal.id]?.icon ?? Sparkles;
                    return <Icon className="w-5 h-5 text-teal" aria-hidden />;
                  })()}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-darkgray">{goal.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-[68ch]">{goal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
