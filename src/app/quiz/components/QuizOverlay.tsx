"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed inset-0 z-50 bg-neutral-800"
    >
      {/* ===== Backdrop: your desktop hero section (visual only) ===== */}
      <div className="absolute inset-0 hidden md:block overflow-hidden">
        <div className="relative h-full bg-neutral-800">
          <div className="mx-auto w-full max-w-[1280px] px-6">
            {/* Glow — anchor to bottom-right OR bottom-center (choose one) */}
            <div
              className="
                pointer-events-none absolute z-0
                w-[2331px] h-[1935px]
                right-[-900px] bottom-[-900px]
                rounded-full blur-[54px]
              "
              style={{
                background:
                  "radial-gradient(ellipse 72.73% 75.28% at 67.98% 65.87%, #F7F0FB 0%, #BE89E2 23.07%, #4119B8 46.77%, #16064A 77.15%, #171621 100%)",
              }}
            />

            {/* Duck top-left */}
            <div className="pointer-events-none absolute left-0 top-0 z-0">
              <Image
                src="/duck.png"
                alt="Duck"
                width={700}
                height={700}
                priority
                className="block w-[500px] h-auto"
              />
            </div>

            <div className="relative flex min-h-[720px] items-center justify-center">
              {/* Logo */}
              <div className="absolute right-0 top-8 z-10">
                <Image src="/logo.svg" alt="Small Logo" width={95} height={88} priority />
              </div>

              {/* Center stack */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-2">
                  <Image src="/galactic.svg" alt="Galactic Text" width={587} height={215} priority />
                </div>

                <p className="text-display-lg text-neutral-100 -mt-[60px]">persona quiz</p>

                <div className="mt-[240px]">
                  <Button
                    onClick={() => router.push("/quiz")}
                    variant="default"
                    size="large"
                    iconPos="none"
                    className="h-[40px] w-[360px] justify-center"
                  >
                    Take the Quiz
                  </Button>
                </div>
              </div>

              {/* Panda + dog */}
              <div className="absolute left-[-100px] bottom-[-40px] z-10 rotate-6">
                <Image src="/panda.svg" alt="Panda" width={350} height={350} />
              </div>

              <div className="absolute right-[-80px] bottom-[-40px] z-10 -rotate-12">
                <Image src="/dog.png" alt="Dog" width={450} height={450} />
              </div>
            </div>
          </div>
        </div>

        {/* Optional: darken the hero a bit so modal pops */}
        <div className="absolute inset-0 bg-neutral-950/35" />
      </div>

      {/* ===== Modal layer (desktop) ===== */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center p-6">
          <div
          className="
            relative z-20
            w-full max-w-[1250px]
            h-[660px]
            rounded-[24px]
            border border-pink-200
            bg-blue-800
            overflow-hidden
            shadow-2xl
            isolate
          "
        >
          <div className="h-full w-full bg-neutral-800">
            {children}
          </div>
        </div>
      </div>

      {/* ===== Mobile: just show the quiz full-screen ===== */}
      <div className="md:hidden h-full">{children}</div>
    </motion.div>
  );
}