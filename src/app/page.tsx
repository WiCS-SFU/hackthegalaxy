import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/faq/FAQ";
import Sponsors from "@/components/sponsors/Sponsors";
import FooterCounter from "@/components/FooterCounter";
import OurTeam from "../components/OurTeam";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FAQ />
      <Quiz />
      <Sponsors />
      <OurTeam />
    </main>
  );
}
