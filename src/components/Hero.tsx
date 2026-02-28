import Link from "next/link";
import Image from "next/image";
import StarParallax from "./ui/effects/StarParallax";

export default function Hero() {
  return (
    <div id="hero" className="bg-neutral-800 px-lg pb-2xl">
      {/* DESKTOP HERO */}
      <div className="hidden md:block">
        {/* OUTER CONTENT CONTAINER (page gutters) */}
        <div className="mx-auto w-full max-w-[1280px] px-6 pb-12">
          <section className="relative w-full overflow-hidden rounded-3xl text-white pt-[275px] pb-[200px]">
            {/* Background glow */}
            {/* Desktop background glow */}
            <div
              className="
                    absolute z-0
                    w-[2331.232px] h-[1934.929px]
                    right-[-819.116px] bottom-[-967.464px]
                    rounded-[2331.232px]
                    blur-[87.43531799316406px]
                    pointer-events-none
                  "
              style={{
                background:
                  "radial-gradient(49.86% 54.54% at 55.89% 57.72%, #F7F0FB 0%, #BE89E2 23.07%, #4119B8 46.77%, #16064A 77.15%, #171621 100%)",
              }}
            />

            {/* STAR PARALLAX BACKGROUND */}
            <div className="absolute inset-0">
              <StarParallax />
            </div>

            {/* INNER CONTENT CONTAINER (logo + text + meta) */}
            <div className="relative z-10 flex flex-col items-start pl-12">
              {/* Logo */}
              <div className="w-[663px] h-[240px]">
                <Image
                  src="/hack-the-galaxy-logo.svg"
                  alt="Hack the Galaxy logo"
                  width={663}
                  height={240}
                  priority
                />
              </div>

              {/* HERO TEXT GROUP (this is the new container) */}
              <div className="flex flex-col gap-2 mt-8 mb-8 pl-12">
                {/* Tagline */}
                <p className="text-heading-md">Where creativity takes orbit.</p>

                {/* Description */}
                <p className="text-body-lg max-w-[630px]">
                  A 12-hour hackathon for women and non-binary students in tech.
                </p>
              </div>

              {/* Date + Location */}
              <div className="flex flex-col gap-1 pl-12">
                <p className="text-body-lg">March 14, 2026</p>
                <p className="text-body-lg">SFU Burnaby Campus</p>
              </div>

              {/* CTA */}
              <div className="mt-6 pl-12">
                <button className="inline-flex items-center justify-center px-5 py-2 rounded-md border border-pink-100 hover:scale-105 transition-transform">
                  <Link
                    href="https://events.mlh.io/events/13601-hack-the-galaxy"
                    className="text-pink-100 text-accent-lg uppercase tracking-wider"
                  >
                    Apply Now
                  </Link>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* MOBILE HERO */}
      <div className="md:hidden">
        <section className="relative w-full overflow-hidden rounded-3xl pt-36 pb-36 text-white">
          {/* Background glow */}
          <div
            className="absolute z-0 w-[935.67px] h-[935.67px]
            left-[-284.44px] top-[207.35px]
            bg-[radial-gradient(ellipse_70%_89%_at_67.98%_64.87%,_#F7F0FB_0%,_#BE89E2_23%,_#4119B8_47%,_#16064A_77%,_#171621_100%)]
            rounded-full blur-3xl"
          />

          {/* STAR PARALLAX BACKGROUND */}
          <div className="absolute inset-0 z-[1]">
            <StarParallax />
          </div>

          <div className="relative z-10 overflow-hidden max-w-[393px] w-full mx-auto px-lg flex flex-col text-center">
            <div className="mb-3xl flex justify-center">
              <Image
                src="/hack-the-galaxy-logo.svg"
                alt="Hack the Galaxy logo"
                width={340}
                height={100}
                priority
              />
            </div>

            <div className="py-3xl mb-3xl relative z-20">
              <p className="text-heading-sm text-white mb-lg">
                Where creativity takes orbit.
              </p>
              <p className="text-body-lg text-white">
                A 12-hour hackathon for women and non-binary students in tech.
              </p>
            </div>
            <div className="py-3xl mb-3xl">
              <p className="text-heading-sm mb-lg">
                Where creativity takes orbit.
              </p>
              <p className="text-body-lg">
                A 12-hour hackathon for women and non-binary students in tech.
              </p>
            </div>

            <div className="mb-xl">
              <p className="text-body-lg">March 14, 2026</p>
              <p className="text-body-lg">SFU Burnaby Campus</p>
            </div>

            <div className="w-full flex justify-center">
              <button className="w-fit inline-flex items-center justify-center px-3.5 py-1.5 rounded-md border border-pink-100 hover:scale-105 transition-transform duration-300">
                <span className="text-pink-100 text-xl font-bold font-['Oxanium'] uppercase tracking-wider">
                  Apply Now
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
