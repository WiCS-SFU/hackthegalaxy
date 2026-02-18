import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/faq/FAQ";
import Sponsors from "@/components/sponsors/Sponsors";
import FooterCounter from "@/components/FooterCounter";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FAQ />
      <Sponsors/>
    </main>
}