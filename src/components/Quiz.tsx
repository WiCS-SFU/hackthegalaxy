"use client";

import Image from 'next/image';
import Button from "@/components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Quiz() {
    const router = useRouter();
    return(
        <section className="relative bg-neutral-800 overflow-hidden">
            <div className="w-full text-center">
                <div className="absolute z-0 w-[772.06px] h-[772.06px] 
                    left-[-300px] top-[90px]
                    bg-[radial-gradient(ellipse_72.73%_75.28%_at_67.98%_65.87%,_var(--pink-100,_#F7F0FB)_0%,_var(--pink-400,_#BE89E2)_23%,_var(--purple-600,_#4119B8)_47%,_var(--purple-800,_#16064A)_77%,_var(--neutral-800,_#171621)_100%)] 
                    rounded-full blur-[53.84px]"/>

                <div className="relative flex flex-col items-center text-center">
                    <div className="absolute top-13 right-5">
                        <Image
                            src="/logo.svg"
                            alt="Small Logo"
                            width={50}
                            height={45}
                            priority
                        />
                    </div>

                    <div className="z-10 mt-50">
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

                    <div className="z-10 mt-50 mb-5">
                            <Button onClick={() => router.push("/quiz")} variant="default" icon={<PlusIcon className="h-5 w-96" />} size="large" iconPos="none">
                                Take the Quiz
                            </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}