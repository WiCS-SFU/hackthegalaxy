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
      <div className="px-xl py-3xl flex justify-center">
        <div className="w-full max-w-screen-sm mx-auto">
          <span className="text-accent-sm text-cyan-400 uppercase tracking-widest">
            About Us
          </span>
          <h2 className="text-heading-lg text-neutral-100 mt-xl">
            What is Hack the Galaxy?
          </h2>
          <p className="text-body-sm text-neutral-100 mt-xl leading-relaxed">
            Hack the Galaxy is a 12-hour student-run hackathon designed to
            empower women and non-binary individuals interested in computer
            science and technology. Hosted by SFU WiCS, we aim to create a safe
            and supportive environment where attendees of all skill levels can
            learn, collaborate, and build confidence in computer science.
          </p>
        </div>
      </div>

      <div className="bg-purple-600 py-3xl px-3xl flex justify-center text-center">
        <div className="w-full">
          <span className="text-accent-sm text-pink-300 uppercase tracking-widest">
            When & Where
          </span>
          <p className="text-body-lg text-neutral-100 mt-xl leading-snug">
            Hack the Galaxy will take place on{" "}
            <span className="font-bold">Saturday, March 14, 2026</span>, from{" "}
            <span className="font-bold">9:00 AM to 9:00 PM</span> at{" "}
            <span className="font-bold">SFU Burnaby campus</span> (8888
            University Dr W).
          </p>
        </div>
      </div>

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
            SFU's Computing Science programs, dedicated to building a supportive
            network for students throughout their academic journeys. We organize
            a diverse range of activities, including social, technical,
            graduate-focused, and outreach initiatives for the broader WiCS
            community.
          </p>

          <div className="py-2xl grid grid-cols-2 gap-lg w-full">
            <div className="p-xl w-full max-w-[176px] min-h-[168px] bg-neutral-700 rounded-md inline-flex flex-col justify-between items-start overflow-hidden">
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

            <div className="p-xl w-full max-w-[176px] min-h-[168px] bg-neutral-700 rounded-md inline-flex flex-col justify-between items-start overflow-hidden">
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

            <div className="p-xl w-full max-w-[176px] min-h-[168px] bg-neutral-700 rounded-md inline-flex flex-col justify-between items-start overflow-hidden">
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

            <div className="p-xl w-full max-w-[176px] min-h-[168px] bg-neutral-700 rounded-md inline-flex flex-col justify-between items-start overflow-hidden">
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

          <div className="relative rounded-md overflow-hidden w-full aspect-[6/6] overflow-hidden">
            <Image
              src="/team-photo.png"
              alt="Team Photo"
              fill
              className="object-cover scale-[1.32] object-[76%_20%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
