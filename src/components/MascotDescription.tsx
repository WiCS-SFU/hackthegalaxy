import MascotCard from "./ui/cards/MascotCard";
import PoppyImg from "@/assets/images/shared/mascot/poppy-img.svg";
import PiperImg from "@/assets/images/shared/mascot/piper-img.svg";
import PingImg from "@/assets/images/shared/mascot/ping-img.svg";
import PoppyPaw from "@/assets/images/shared/mascot/poppy-pawprint.svg";
import PiperPaw from "@/assets/images/shared/mascot/piper-pawprint.svg";
import PingPaw from "@/assets/images/shared/mascot/ping-pawprint.svg";
import PoppyBg from "@/assets/images/shared/mascot/poppy-stars-bg.svg";
import PiperBg from "@/assets/images/shared/mascot/piper-stars-bg.svg";
import PingBg from "@/assets/images/shared/mascot/ping-stars-bg.svg";

export default function OurTeam() {
  return (
    <section className="flex flex-col gap-xl mt-0 mx-xl mb-3xl">
      <h1 className="text-cyan-400 text-accent-sm">
        From Across The Galaxy...
      </h1>
      <h2 className="text-neutral-100 text-heading-lg">Meet Our Mascots</h2>
      <div className="gap-xl flex flex-col justify-center items-center md:flex-row">
        <MascotCard
          name="Poppy"
          nameColour="text-system-red-200"
          description="Never misses a workshop and never ships without pristine documentation. Powered by coffee, clean logic, and perfectly explained systems."
          mascotImg={PoppyImg.src}
          pawImg={PoppyPaw.src}
          bgImg={PoppyBg.src}
          mascotPos="-translate-y-10 scale-110"
          pawPos="translate-x-40 translate-y-22 scale-110 rotate-[17.884 deg] md:translate-x-40 md:translate-y-22 md:scale-105"
          pawWidth={145.457}
          pawHeight={128.499}
          namePos="rotate-[-7.461deg]"
        ></MascotCard>

        <MascotCard
          name="Piper"
          nameColour="text-system-yellow-300"
          description="Believes every problem can be solved with the right API. Types at warp speed and always has the library, cable, or workaround you need."
          mascotImg={PiperImg.src}
          pawImg={PiperPaw.src}
          bgImg={PiperBg.src}
          mascotPos="translate-x-15 -translate-y-5 md:scale-112"
          pawPos="-translate-x-18 -translate-y-15 md:scale-100"
          pawWidth={169.992}
          pawHeight={258.201}
          namePos="rotate-[2.417deg]"
        ></MascotCard>

        <MascotCard
          name="Ping"
          nameColour="text-purple-200"
          description="Has a sixth sense for free food and Discord notifications. Keeps the team alive with memes, updates, and immaculate vibes."
          mascotImg={PingImg.src}
          pawImg={PingPaw.src}
          bgImg={PingBg.src}
          mascotPos="translate-x-8 -translate-y-12 scale-120"
          pawPos="rotate-[-14.79 deg] -translate-x-12 translate-y-12 scale-120"
          pawWidth={134.779}
          pawHeight={150.617}
          namePos="rotate-[-8.073 deg]"
        ></MascotCard>
      </div>
    </section>
  );
}
