import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero" className="bg-neutral-800 px-lg pb-2xl">
      <section className="relative w-full justify-end items-center text-white overflow-hidden rounded-3xl pt-36 pb-36">
        <div className="overflow-hidden max-w-[393px] w-full mx-auto px-lg flex flex-col text-center">
          <div
            className="absolute z-0 w-[935.67px] h-[935.67px]
                        left-[-284.44px] top-[207.35px]
                        bg-[radial-gradient(ellipse_70%_89%_at_67.98%_64.87%,_#F7F0FB_0%,_#BE89E2_23%,_#4119B8_47%,_#16064A_77%,_#171621_100%)]
                        rounded-full blur-3xl
                    "
          />

          <div className="mb-3xl relative flex justify-center">
            <Image
              src="/hack-the-galaxy-logo.svg"
              alt="Hack the Galaxy logo"
              width={340}
              height={100}
              priority
            />
          </div>

          <div className="py-3xl mb-3xl z-10">
            <p className="text-heading-sm text-white mb-lg">
              Where creativity takes orbit.
            </p>
            <p className="text-body-lg text-white">
              A 12-hour hackathon for women and non-binary students in tech.
            </p>
          </div>

          <div className="mb-xl z-10">
            <p className="text-body-lg text-white">March 14, 2026</p>
            <p className="text-body-lg text-white">SFU Burnaby Campus</p>
          </div>

          <div className="w-full flex justify-center">
            <button className="w-fit inline-flex items-center justify-center px-3.5 py-1.5 rounded-md border border-pink-100 hover:scale-105 transition-transform duration-300 z-10">
              <span className="text-pink-100 text-xl font-bold font-['Oxanium'] uppercase tracking-wider">
                Apply Now
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
