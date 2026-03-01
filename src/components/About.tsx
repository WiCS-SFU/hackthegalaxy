import Image from "next/image";

export default function About() { 
  return (
    <section
      id="about"
      className="bg-neutral-800 flex flex-col w-full"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-anchor-placement="top-center"
      data-aos-once="true"
      data-aos-duration="600"
    >
      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        {/* About Us */}
        <div className="px-xl py-3xl flex justify-center">
          <div className="w-full max-w-screen-sm mx-auto">
            <span className="text-accent-lg text-cyan-400 uppercase tracking-widest">
              About Us
            </span>

            <h2 className="text-heading-lg text-neutral-100 mt-xl">
              What is Hack the Galaxy?
            </h2>

            <p className="text-body-sm text-neutral-100 mt-xl leading-relaxed">
              Hack the Galaxy is a 12-hour student-run hackathon designed to
              empower women and non-binary individuals interested in computer
              science and technology. Hosted by SFU WiCS, we aim to create a
              safe and supportive environment where attendees of all skill
              levels can learn, collaborate, and build confidence in computer
              science.
            </p>
          </div>
        </div>

        {/* When & Where (mobile) */}
        <div className="bg-purple-600 py-3xl px-3xl flex justify-center text-center">
          <div className="w-full">
            <span className="text-accent-sm text-pink-300 uppercase tracking-widest">
              When &amp; Where
            </span>

            <p className="text-body-lg text-neutral-100 mt-xl leading-snug">
              Hack the Galaxy will take place on{" "}
              <span className="font-bold">Saturday, March 14, 2026</span>, from{" "}
              <span className="font-bold">8:30 AM to 10:00 PM</span> at{" "}
              <span className="font-bold">SFU Burnaby campus</span> (8888
              University Dr W).
            </p>
          </div>
        </div>

        {/* Who We Are (mobile) */}
        <div className="bg-neutral-800 py-3xl px-xl flex justify-center">
          <div className="w-full">
            <span className="text-accent-sm text-cyan-400 uppercase tracking-widest">
              Who We Are
            </span>

            <h2 className="text-heading-lg text-neutral-100 mt-xl">
              About SFU WiCS
            </h2>

            <p className="text-body-sm text-neutral-100 mt-xl leading-relaxed">
              Established in 2004, WiCS is a student-led society affiliated with
              SFU's Computing Science programs, dedicated to building a
              supportive network for students throughout their academic
              journeys. We organize a diverse range of activities, including
              social, technical, graduate-focused, and outreach initiatives for
              the broader WiCS community.
            </p>

            {/* Cards (mobile = your original 2-col grid) */}
            <div className="py-2xl grid grid-cols-2 gap-lg w-full">
              {/* PROMOTE */}
              <div className="p-xl w-full min-h-[168px] bg-neutral-700 rounded-md inline-flex flex-col justify-between items-start overflow-hidden">
                <div className="w-6 h-6 relative overflow-hidden">
                  <Image
                    src="/speakerphone.svg"
                    alt="Speakerphone"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="self-stretch flex text-neutral-100 flex-col justify-start items-end">
                  <div className="self-stretch text-body-lg font-bold leading-7">
                    PROMOTE
                  </div>
                  <div className="self-stretch text-body-md leading-6">
                    women in Computing Science
                  </div>
                </div>
              </div>

              {/* SUPPORT */}
              <div className="p-xl w-full min-h-[168px] bg-neutral-700 rounded-md inline-flex flex-col justify-between items-start overflow-hidden">
                <div className="w-6 h-6 relative overflow-hidden">
                  <Image
                    src="/academic-cap.svg"
                    alt="Academic Cap"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="self-stretch flex text-neutral-100 flex-col justify-start items-end">
                  <div className="self-stretch text-body-lg font-bold leading-7">
                    SUPPORT
                  </div>
                  <div className="self-stretch text-body-md leading-6">
                    students throughout their academic journey
                  </div>
                </div>
              </div>

              {/* CHALLENGE */}
              <div className="p-xl w-full min-h-[168px] bg-neutral-700 rounded-md inline-flex flex-col justify-between items-start overflow-hidden">
                <div className="w-6 h-6 relative overflow-hidden">
                  <Image
                    src="/lightning-bolt.svg"
                    alt="Lightning Bolt"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="self-stretch flex text-neutral-100 flex-col justify-start items-end">
                  <div className="self-stretch text-body-lg font-bold leading-7">
                    CHALLENGE
                  </div>
                  <div className="self-stretch text-body-md leading-6">
                    the biases and barriers in tech
                  </div>
                </div>
              </div>

              {/* BUILD */}
              <div className="p-xl w-full min-h-[168px] bg-neutral-700 rounded-md inline-flex flex-col justify-between items-start overflow-hidden">
                <div className="w-6 h-6 relative overflow-hidden">
                  <Image
                    src="/heart.svg"
                    alt="Heart"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="self-stretch flex text-neutral-100 flex-col justify-start items-end">
                  <div className="self-stretch text-body-lg font-bold leading-7">
                    BUILD
                  </div>
                  <div className="self-stretch text-body-md leading-6">
                    a strong, inclusive community
                  </div>
                </div>
              </div>
            </div>

            {/* Team photo */}
            <div className="relative rounded-md overflow-hidden w-full aspect-[6/6]">
              <Image
                src="/team-photo.png"
                alt="Team Photo"
                fill
                className="object-cover translate-y-[14%] scale-[1.3] object-[76%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        {/* About Us (desktop, right aligned, wider rail) */}

        <div className="mx-auto w-full max-w-[1280px] px-6 pb-12">
          <div className="flex flex-col items-start text-left ml-auto">
            <span className="text-accent-sm text-cyan-400 uppercase tracking-widest">
              About Us
            </span>

            <h2 className="text-heading-lg text-neutral-100 mt-6">
              What is Hack the Galaxy?
            </h2>

            <div className="w-[750px]">
              <p className="text-body-md text-neutral-100 mt-xl  w-[750px] leading-relaxed whitespace-normal break-words">
                Hack the Galaxy is a 12-hour student-run hackathon designed to
                empower women and non-binary individuals interested in computer
                science and technology. Hosted by SFU WiCS, we aim to create a
                safe and supportive environment where attendees of all skill
                levels can learn, collaborate, and build confidence in computer
                science.
              </p>
            </div>
          </div>
        </div>

        {/* When & Where (desktop version, not shared) */}
        <div className="bg-purple-600">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-12">
            <div className="flex flex-col items-center text-center">
              <span className="text-accent-lg text-pink-300 uppercase tracking-widest">
                When &amp; Where
              </span>
              <div className="w-[800px]">
                <p className="text-body-lg text-neutral-100 mt-6 leading-snug">
                  Hack the Galaxy will take place on{" "}
                  <span className="font-bold">Saturday, March 14, 2026</span>,
                  from <span className="font-bold">8:30 AM to 10:00 PM</span> at{" "}
                  <span className="font-bold">SFU Burnaby campus</span> (8888
                  University Dr W).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are (desktop version, not shared) */}
        <div className="bg-neutral-800">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-12">
            <div className="flex flex-col items-start text-left">
              <span className="text-accent-sm text-cyan-400 uppercase tracking-widest">
                Who We Are
              </span>

              <h2 className="text-heading-lg text-neutral-100 mt-6">
                About SFU WiCS
              </h2>
              <div className="w-[750px]">
                <p className="text-body-md text-neutral-100 mt-6 leading-relaxed">
                  Established in 2004, WiCS is a student-led society affiliated
                  with SFU's Computing Science programs, dedicated to building a
                  supportive network for students throughout their academic
                  journeys. We organize a diverse range of activities, including
                  social, technical, graduate-focused, and outreach initiatives
                  for the broader WiCS community.
                </p>
              </div>
            </div>

            {/* Desktop cards: 4 columns, wider cards */}
            <div className="mt-16 grid grid-cols-4 gap-8">
              {[
                {
                  icon: "/speakerphone.svg",
                  title: "PROMOTE",
                  text: "women in Computing Science",
                },
                {
                  icon: "/academic-cap.svg",
                  title: "SUPPORT",
                  text: "students throughout their academic journey",
                },
                {
                  icon: "/lightning-bolt.svg",
                  title: "CHALLENGE",
                  text: "the biases and barriers in tech",
                },
                {
                  icon: "/heart.svg",
                  title: "BUILD",
                  text: "a strong, inclusive community",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-neutral-700 rounded-md flex flex-col justify-between min-h-[220px]"
                >
                  <div className="w-8 h-8 relative">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="text-neutral-100 text-left">
                    <div className="text-body-lg font-bold">{item.title}</div>
                    <div className="text-body-md">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop image: allow it to be rectangular if you want */}
            {/* Desktop image */}
            <div className="mt-12 relative rounded-md overflow-hidden w-full aspect-[1700/900]">
              <Image
                src="/team-photo.png"
                alt="Team Photo"
                fill
                className="object-cover object-[center_-50%] scale-[1.13]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
