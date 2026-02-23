import SponsorCard from "./SponsorsCard";

export default function Sponsors() {
  return (
    <section className="w-full bg-neutral-800 py-3xl px-xl flex flex-col md:px-35">
      <div className="w-full">
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
          <SponsorCard tier="gold" />
          <SponsorCard tier="gold" />

          {/* SILVER */}
          <div className="grid grid-cols-2 gap-3">
            <SponsorCard tier="silver" />
            <SponsorCard tier="silver" />
          </div>

          {/* BRONZE */}
          <div className="grid grid-cols-3 gap-4">
            <SponsorCard tier="bronze" />
            <SponsorCard tier="bronze" />
            <SponsorCard tier="bronze" />
          </div>
        </div>
      </div>
    </section>
  );
}
