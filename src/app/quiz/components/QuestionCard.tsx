"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/buttons/Button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import StarParallax from "@/components/ui/effects/StarParallax";

export default function QuestionCard({
  data,
  current,
  total,
  onNext,
  onBack,
}: {
  data: {
    id: number;
    image: string;
    question: string;
    options: string[];
    option_icons: string[];
  };
  current: number;
  total: number;
  onNext: (selectedIndex: number) => void;
  onBack: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();
  const canGoBack = current > 1;
  useEffect(() => {
    setSelected(null);
  }, [data.id]);

  return (
    <>
      <section className="relative h-screen md:hidden overflow-hidden">
        <div
          className="absolute z-0 w-[772.06px] h-[772.06px] 
                    left-[-300px] top-[460px]
                    bg-[radial-gradient(ellipse_72.73%_75.28%_at_67.98%_65.87%,_var(--pink-100,_#F7F0FB)_0%,_var(--pink-400,_#BE89E2)_23%,_var(--purple-600,_#4119B8)_47%,_var(--purple-800,_#16064A)_77%,_var(--neutral-800,_#171621)_100%)] 
                    rounded-full blur-[53.84px]"
        />

        <div className="pointer-events-none absolute inset-0 z-[1]">
            <StarParallax />
        </div>

       <div className="relative flex min-h-full flex-col items-center text-center">
          <div className="mt-11">
            <Image
              src={data.image}
              alt="Question Image"
              width={95}
              height={30}
              priority
            />
          </div>

          <div className="mt-2">
            <p className="text-accent-sm text-pink-300">
              {current} of {total}
            </p>
          </div>

          <div className="mt-1 mb-2 px-xl">
            <p className="text-heading-md">{data.question}</p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 w-full gap-[11px] px-[11px]">
            {data.options.map((option, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`p-xl rounded-md cursor-pointer transition-all max-w-[400px] w-full
                        ${
                          selected === index
                            ? "bg-pink-200/35"
                            : "bg-pink-200/15"
                        }
                    `}
              >
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 relative">
                    <Image
                      src={data.option_icons[index]}
                      alt="icon"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="flex-1 text-neutral-100 text-body-sm text-left leading-[1.4]">
                    {option}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="z-10 mt-1 mb-3 flex gap-12">
            {current > 1 && (
              <Button
                onClick={onBack}
                variant="ghost"
                size="large"
                iconPos="right"
                icon={<ArrowUpIcon className="h-4 w-4 stroke-3" />}
                className="justify-center"
              >
                Back
              </Button>
            )}

            <Button
              onClick={() => onNext(selected ?? 0)}
              variant="ghost"
              size="large"
              iconPos="right"
              icon={<ArrowDownIcon className="h-4 w-4 stroke-3" />}
              className="justify-center"
            >
              {current === total ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </section>
      {/* ======================
            DESKTOP (>= md)
        ====================== */}
      <section className="relative hidden h-full md:block bg-transparent">
        <div
          className="
            pointer-events-none absolute z-0
            w-[2331px] h-[1935px]
            left-1/2 -translate-x-1/3
            bottom-[-900px]
            rounded-full blur-[54]
            "
          style={{
            background:
              "radial-gradient(ellipse 70% 75% at 50% 75%, #F7F0FB 0%, #BE89E2 20%, #4119B8 45%, #16064A 75%, #171621 100%)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-[1]">
            <StarParallax />
        </div>

        {/* Layout (shrink-wrap content, center as a group) */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] justify-center items-center py-12">
          <div className="grid w-full grid-cols-[minmax(300px,420px)_1fr] items-center gap-10">
            {/* Left: big illustration */}
            <div className="relative flex items-center justify-center">
              <Image
                src={data.image}
                alt="Question Image"
                width={250}
                height={200}
                priority
                className="h-auto select-none"
              />
            </div>

            {/* Right: question + options + buttons */}
            <div className="flex flex-col pt-[3vh] pr-6">
              {/* Progress */}
              <p className="text-accent-md tracking-wide text-pink-300">
                {current} of {total}
              </p>

              {/* Question */}
              <p className="mt-3 max-w-[650px] text-heading-lg leading-tight text-neutral-100">
                {data.question}
              </p>

              {/* Options */}
              <div className="mt-8 flex w-full max-w-[620px] flex-col gap-4">
                {data.options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelected(index)}
                    className={`
                        w-full rounded-xl p-xl text-left transition-all
                        min-h-[76px]
                        ${selected === index ? "bg-pink-200/30" : "bg-pink-200/15"}
                        hover:bg-pink-200/25
                        border border-white/5
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <span className="relative mt-0.5 h-5 w-5 shrink-0">
                        <Image
                          src={data.option_icons[index]}
                          alt=""
                          fill
                          className="object-contain"
                          priority
                        />
                      </span>

                      <span className="text-body-md leading-6 text-neutral-100 ">
                        {option}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 flex items-center gap-4">
                {canGoBack && (
                  <Button
                    onClick={onBack}
                    variant="ghost"
                    size="large"
                    iconPos="right"
                    icon={<ArrowUpIcon className="h-4 w-4 stroke-3" />}
                    className="w-[140px] justify-center"
                  >
                    Back
                  </Button>
                )}

                <Button
                  onClick={() => onNext(selected ?? 0)}
                  variant="ghost"
                  size="large"
                  iconPos="right"
                  icon={<ArrowDownIcon className="h-4 w-4 stroke-3" />}
                  className="w-[180px] justify-center"
                  disabled={selected === null}
                >
                  {current === total ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
