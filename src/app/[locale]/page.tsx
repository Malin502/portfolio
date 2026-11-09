import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/app/components/layout/Header";
import { Hero } from "@/app/components/sections/Heros";
import { Profile } from "@/app/components/sections/Profile";
import { Research } from "@/app/components/sections/Research";
import { Publications } from "@/app/components/sections/Publications";
import { Skill } from "@/app/components/sections/Skill";
import { Qualification } from "@/app/components/sections/Qualification";
import { Works } from "@/app/components/sections/Works";
import { Experience } from "@/app/components/sections/Experience";
import { Future } from "@/app/components/sections/Future";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/layout/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex flex-col space-y-0">
        <Hero />
        <Profile />
        <Research />
        <Publications />
        <Works />
        <Experience />
        <Skill />
        <Qualification />
        <Future />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
