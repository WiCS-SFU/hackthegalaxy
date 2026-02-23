"use client";

import Image from 'next/image';
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function QuizPage() {
    const router = useRouter();
    return (
        <section className="relative min-h-screen bg-neutral-800 overflow-hidden">
            <div>
                <div className="absolute z-0 w-[772.06px] h-[772.06px] 
                    left-[-300px] top-[460px]
                    bg-[radial-gradient(ellipse_72.73%_75.28%_at_67.98%_65.87%,_var(--pink-100,_#F7F0FB)_0%,_var(--pink-400,_#BE89E2)_23%,_var(--purple-600,_#4119B8)_47%,_var(--purple-800,_#16064A)_77%,_var(--neutral-800,_#171621)_100%)] 
                    rounded-full blur-[53.84px]"/>

                <div className="relative flex flex-col items-center text-center">
                    <div className="absolute mt-50">
                        <Image
                            src="/logo.svg"
                            alt="Small Logo"
                            width={70}
                            height={45}
                            priority
                        />
                    </div>

                    <div className="mt-75 px-xl">
                        <p className="text-display-sm">
                            Welcome to the Galactic Persona Quiz!
                        </p>
                    </div>

                    <div className="mt-4 mx-2 px-3xl">
                        <p className="text-body-md">
                            Where creativity takes orbit, your strengths naturally rise to the surface.  Take the quiz and find out who you are when you {" "}
                            <span className="font-bold">hack the galaxy.</span>
                        </p>
                    </div>

                    <div className="z-10 mt-8 mb-3">
                            <Button onClick={() => router.push("/quiz/questions")} variant="default" size="large" iconPos="none" className="w-[181px] justify-center">
                                Take the Quiz
                            </Button>
                    </div>

                    <div className="z-10">
                            <Button onClick={() => router.push("/")} variant="outline" size="large" iconPos="none" className="w-[181px] justify-center">
                                Go back to home
                            </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}