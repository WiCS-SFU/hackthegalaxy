"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

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
    };
    current: number;
    total: number;
    onNext: () => void;
    onBack: () => void;
}) {
    const router = useRouter();
    return (
        <section className="relative min-h-screen bg-neutral-800 overflow-hidden">
            <div className="absolute z-0 w-[772.06px] h-[772.06px] 
                    left-[-300px] top-[440px]
                    bg-[radial-gradient(ellipse_72.73%_75.28%_at_67.98%_65.87%,_var(--pink-100,_#F7F0FB)_0%,_var(--pink-400,_#BE89E2)_23%,_var(--purple-600,_#4119B8)_47%,_var(--purple-800,_#16064A)_77%,_var(--neutral-800,_#171621)_100%)] 
                    rounded-full blur-[53.84px]"/>

            <div className="relative flex flex-col items-center text-center">
                <div className="absolute mt-30">
                    <Image
                        src={data.image}
                        alt="Question Image"
                        width={115}
                        height={45}
                        priority
                    />
                </div>

                <div className = "mt-70">
                    <p className = "text-accent-sm text-pink-300">
                        {current} of {total}
                    </p>
                </div>

                <div className="mt-1 mb-2xl px-xl">
                    <p className="text-heading-md">
                        {data.question}
                    </p>
                </div>

                <div className = "grid grid-cols-1 w-full px-4 gap-xl">
                    <div className = "p-xl w-full bg-pink-200/15 rounded-md overflow-hidden inline-flex justify-start items-start gap-2.5">
                        <div className="w-5 h-5 relative overflow-hidden">
                            <Image 
                                src="/flag.svg"
                                alt="Flag"
                                fill
                                className="object-cover"
                                priority/>
                        </div>
                        <div className="flex-1 justify-start text-neutral-100 text-body-sm text-left leading-5">
                            <p>{data.options[0]}</p>
                        </div>
                    </div>

                    <div className = "p-xl w-full bg-pink-200/15 rounded-md overflow-hidden inline-flex justify-start items-start gap-2.5">
                        <div className="w-5 h-5 relative overflow-hidden">
                            <Image 
                                src="/book-open.svg"
                                alt="Flag"
                                fill
                                className="object-cover"
                                priority/>
                        </div>
                        <div className="flex-1 justify-start text-neutral-100 text-body-sm text-left leading-5">
                            <p>{data.options[1]}</p>
                        </div>
                    </div>

                    <div className = "p-xl w-full bg-pink-200/15 rounded-md overflow-hidden inline-flex justify-start items-start gap-2.5">
                        <div className="w-5 h-5 relative overflow-hidden">
                            <Image 
                                src="/lightning-bolt.svg"
                                alt="Flag"
                                fill
                                className="object-cover"
                                priority/>
                        </div>
                        <div className="flex-1 justify-start text-neutral-100 text-body-sm text-left leading-5">
                            <p>{data.options[2]}</p>
                        </div>
                    </div>

                </div>

                <div className="z-10 mt-7 mb-5">
                    <Button onClick={() => router.push("/quiz")} variant="default" icon={<PlusIcon className="h-5 w-96" />} size="large" iconPos="none">
                        Next
                    </Button>
                </div>
            </div>
        </section>
    )
}