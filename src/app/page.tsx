import Hero from "@/components/Hero";
import About from "@/components/About";
import FooterCounter from "@/components/FooterCounter";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>

      {/*<section id="faq">
        <FAQ />
      </section>

      <section id="sponsors">
        <Sponsors />
      </section>

      <section id="our-team">
        <OurTeam />
      </section>

      <section id="apply">
        <Apply />
      </section>*/}
    </>
  );
}

