import SponsorCard from "./SponsorsCard";

export default function Sponsors() {
  return (
    <section id="sponsors" className="w-full bg-neutral-800">
      <div className="mx-auto w-full max-w-[1280px] bg-neutral-800 py-3xl px-2xl flex flex-col"
        data-aos="fade-up"
        data-aos-offset="-100"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
        data-aos-duration="600"
      >
        <div className="w-full bg-neutral-800">
          <p className="text-accent-sm mb-2 text-cyan-400 font">Our Partners</p>

          <h2 className="text-heading-lg mb-4 text-white">Sponsors</h2>

          <p className="text-body-sm text-neutral-100">
            Organized by dedicated student volunteers, this event is made possible
            through the generosity of our partners. Their support enables us to
            create meaningful opportunities and memorable experiences for our
            community.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="mt-xl w-full">
          <div className="flex flex-col gap-4">
            {/* GOLD */}
            <SponsorCard 
              tier="gold" 
              imageSrc="/sponsors/Excelar_White_Logo.svg" 
              altText="Excelar" 
              href="https://www.excelar.ca/"
            />
            <SponsorCard 
              tier="gold" 
              imageSrc="/sponsors/Transoft Solutions Logo White.png" 
              altText="Transoft Solutions" 
              href="https://www.transoftsolutions.com/"
            />
            {/* SILVER */}
            <div>
              <SponsorCard
                tier="silver"
                imageSrc="/sponsors/SAP Logo.svg"
                altText="SAP"
                href="https://www.sap.com/canada/index.html"
              />
            </div>

            {/* BRONZE */}
            <div className="grid grid-cols-3 gap-4">
              {/* <SponsorCard
                tier="bronze"
                imageSrc="/sponsors/OldSpaghettiFactory.png"
                altText="Old Spaghetti Factory"
              /> */}
              <SponsorCard
                tier="bronze"
                imageSrc="/sponsors/CrustNCrunch.png"
                altText="Crust N Crunch"
                href = "https://www.crustncrunch.com/"
              />
              <SponsorCard
                tier="bronze"
                imageSrc="/sponsors/SPB.png"
                altText="Steve's Poke Bar"
                href="https://www.stevespokebar.ca/"
              />
              <SponsorCard
                tier="bronze"
                imageSrc="/sponsors/The_Old_Spaghetti_Factory_Logo.svg"
                altText="Old Spaghetti Factory"
                href="https://oldspaghettifactory.ca/"
              />
            </div>
          </div>
        </div>
    </div>
    </section>
    
  );
}
