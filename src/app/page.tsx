import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Heros";
import { Profile } from "./components/sections/Profile";
import { Research } from "./components/sections/Research";
import { Skill } from "./components/sections/Skill";
import { Qualification } from "./components/sections/Qualification";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col space-y-0">
        <Hero />
        <Profile />
        <Research />
        <Skill />
        <Qualification />
      </main>
    </>
  );
}