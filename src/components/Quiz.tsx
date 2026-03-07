"use client";

import Image from "next/image";
import Button from "@/components/ui/buttons/Button";
import { useRouter } from "next/navigation";
import PoppyImg from "@/assets/images/shared/mascot-quiz/poppy-quiz.svg";
import PiperImg from "@/assets/images/shared/mascot-quiz/piper-quiz.svg";
import PingImg from "@/assets/images/shared/mascot-quiz/ping-quiz.svg";
import StarParallax from "./ui/effects/StarParallax";

export default function Quiz() {
  const router = useRouter();
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        [data-quiz-section="true"] .hero-stars-scroll-wrapper[data-layer="1"] {
          transform: translateY(-300px) !important;
        }
        [data-quiz-section="true"] .hero-stars-scroll-wrapper[data-layer="3"] {
          transform: translateY(-300px) !important;
        }
      `}} />
      <section className="relative bg-neutral-800 overflow-hidden md:hidden"
        data-quiz-section="true"
        data-aos="fade-up"
        data-aos-offset="-100"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
        data-aos-duration="600">
        <div className="w-full text-center">
          {/* Background glow (bigger / shifted for desktop) */}
          <div className="absolute z-0 w-[772.06px] h-[772.06px] left-[-300px] top-[80px] bg-[radial-gradient(ellipse_72.73%_75.28%_at_67.98%_65.87%,_var(--pink-100,_#F7F0FB)_0%,_var(--pink-400,_#BE89E2)_23%,_var(--purple-600,_#4119B8)_47%,_var(--purple-800,_#16064A)_77%,_var(--neutral-800,_#171621)_100%)] rounded-full blur-[53.84px]" />

          <div className="absolute inset-0 z-[1]">
            <StarParallax />
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="absolute top-12 right-4">
              <Image
                src="/logo.svg"
                alt="Small Logo"
                width={50}
                height={45}
                priority
              />
            </div>

            <div className="z-10 mt-57">
              <Image
                src="/galactic.svg"
                alt="Galactic Text"
                width={340}
                height={200}
                priority
              />
            </div>

            <div className="z-10 -mt-6">
              <p className="text-neutral-100 text-4xl font-bold">
                persona quiz
              </p>
            </div>

            <div className="absolute left-[0px] ">
              <Image src={PiperImg.src} alt="Duck" width={310} height={310} />
            </div>

            <div className="absolute mt-104 left-[-55px]">
              <Image src={PingImg.src} alt="Panda" width={300} height={300} />
            </div>

            <div className="absolute mt-106 right-[-56px] -rotate-10">
              <Image src={PoppyImg.src} alt="Dog" width={320} height={320} />
            </div>

            <div className="z-10 mt-60 mb-3">
              <Button
                onClick={() => router.push("/quiz")}
                variant="default"
                size="large"
                iconPos="none"
                className="w-[350px] justify-center"
              >
                Take the Quiz
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          DESKTOP (>= md)
         ======================= */}
      <section className="relative hidden overflow-hidden bg-neutral-800 md:block"
        data-quiz-section="true"
        data-aos="fade-up"
        data-aos-offset="-100"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
        data-aos-duration="600">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          {/* Background glow (bigger / shifted for desktop) */}
          <div
            className="
                absolute z-0
                w-[2331px] h-[1935px]
                left-1/2 -translate-x-1/2
                bottom-[-1200px]
                rounded-full blur-[54px]
                pointer-events-none
            "
            style={{
              background:
                "radial-gradient(ellipse 72.73% 75.28% at 67.98% 65.87%, #F7F0FB 0%, #BE89E2 23.07%, #4119B8 46.77%, #16064A 77.15%, #171621 100%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-[1]">
            <StarParallax />
          </div>
          <div className="absolute left-0 top-0 pointer-events-none">
            <Image
              src={PiperImg.src}
              alt="Duck"
              width={550}
              height={550}
              priority
              className="block h-auto"
            />
          </div>

          <div className="relative flex min-h-[720px] items-center justify-center">
            {/* Logo */}
            <div className="absolute right-0 top-8 z-10">
              <Image
                src="/logo.svg"
                alt="Small Logo"
                width={95}
                height={88}
                priority
              />
            </div>

            {/* Center stack */}
            <div className="relative z-10 mt-20 flex flex-col items-center text-center">
              <div className="mb-2 mt-15">
                <Image
                  src="/galactic.svg"
                  alt="Galactic Text"
                  width={587}
                  height={215}
                  priority
                />
              </div>

              <p className="text-display-lg text-neutral-100 -mt-15">
                persona quiz
              </p>

              <div className="mt-40">
                <Button
                  onClick={() => router.push("/quiz")}
                  variant="default"
                  size="large"
                  iconPos="none"
                  className="w-[360px] h-[40px] justify-center"
                >
                  Take the Quiz
                </Button>
              </div>
            </div>

            {/* Characters (desktop positions) */}
            {/* Duck (desktop) */}

            <div className="absolute left-[-140px] bottom-[0px] z-10">
              <Image src={PingImg.src} alt="Panda" width={500} height={350} />
            </div>

            <div className="absolute right-[-80px] bottom-[0px] z-10 ">
              <Image src={PoppyImg.src} alt="Dog" width={500} height={450} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
