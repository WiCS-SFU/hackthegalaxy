"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import PoppyImg from "@/assets/images/shared/mascot-quiz/poppy-quiz.svg";
import PiperImg from "@/assets/images/shared/mascot-quiz/piper-quiz.svg";
import PingImg from "@/assets/images/shared/mascot-quiz/ping-quiz.svg";

function QuizMobileLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed inset-0 z-50 h-[100dvh] bg-neutral-800"
    >
      {/* Close */}
      <button
        onClick={() => router.push("/")}
        className="fixed left-4 top-4 z-[100] text-white/90 hover:text-white hover:opacity-80 transition
                   pt-[env(safe-area-inset-top)]"
        aria-label="Close quiz"
        type="button"
      >
        <XMarkIcon className="h-10 w-10 stroke-1" />
      </button>

      {/* Full-screen, scrollable content */}
      {children}
    </motion.div>
  );
}

function QuizDesktopLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed inset-0 z-50 bg-neutral-800"
    >
      {/* Navbar always on top, above quiz overlay */}
      <div className="absolute inset-x-0 top-0 z-[100]">
        <Navbar />
      </div>

      {/* Everything below navbar — shrinks with viewport */}
      <div className="absolute top-[88px] inset-x-0 bottom-0 flex flex-col min-h-0">
        {/* Desktop backdrop + modal */}
        <div className="hidden md:block flex-1 min-h-0">
          {/* Backdrop with bars */}
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="relative w-full h-[600px] overflow-hidden px-6">
              {/* ... your glow/duck/hero visuals here ... */}
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
                  src={PiperImg.src}
                  alt="Duck"
                  width={700}
                  height={700}
                  priority
                  className="block w-[500px] h-auto"
                />
              </div>

              <div className="relative flex min-h-[720px] items-center justify-center">
                {/* Center stack */}
                <div className="relative z-10 flex flex-col items-center text-center"></div>

                {/* Panda + dog */}
                <div className="absolute left-[-100px] bottom-[-40px] z-0 rotate-6">
                  <Image
                    src="/panda.svg"
                    alt="Panda"
                    width={350}
                    height={350}
                  />
                </div>

                <div className="absolute right-[-80px] bottom-[-40px] z-0 -rotate-12">
                  <Image
                    src={PoppyImg.src}
                    alt="Dog"
                    width={450}
                    height={450}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Optional: darken the hero a bit so modal pops */}
          <div className="absolute inset-0 bg-neutral-950/35" />
        </div>

        {/* Modal */}
        <div className="absolute inset-0 flex items-stretch justify-center px-6 pb-6 min-h-0">
          <div className="w-full max-w-[1250px] h-full max-h-[809px] rounded-[24px] border border-pink-200 bg-neutral-800 overflow-hidden shadow-2xl flex flex-col">
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="md:hidden">
        <QuizMobileLayout>{children}</QuizMobileLayout>
      </div>

      <div className="hidden md:block">
        <QuizDesktopLayout>{children}</QuizDesktopLayout>
      </div>
    </>
  );
}
