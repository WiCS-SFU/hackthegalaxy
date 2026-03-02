"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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
    useEffect(() => {
        setSelected(null);
    }, [data.id]);

    return (
        <section className="relative min-h-screen bg-neutral-800">
            <div className="absolute z-0 w-[772.06px] h-[772.06px] 
                    left-[-300px] top-[460px]
                    bg-[radial-gradient(ellipse_72.73%_75.28%_at_67.98%_65.87%,_var(--pink-100,_#F7F0FB)_0%,_var(--pink-400,_#BE89E2)_23%,_var(--purple-600,_#4119B8)_47%,_var(--purple-800,_#16064A)_77%,_var(--neutral-800,_#171621)_100%)] 
                    rounded-full blur-[53.84px]"/>

            <div className="relative flex flex-col items-center text-center min-h-screen">
                <div className="mt-30">
                    <Image
                        src={data.image}
                        alt="Question Image"
                        width={115}
                        height={45}
                        priority
                    />
                </div>

                <div className = "mt-4">
                    <p className = "text-accent-sm text-pink-300">
                        {current} of {total}
                    </p>
                </div>

                <div className="mt-1 mb-2xl px-xl">
                    <p className="text-heading-md">
                        {data.question}
                    </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 w-full gap-xl px-xl">
                {data.options.map((option, index) => (
                    <div
                    key={index}
                    onClick={() => setSelected(index)}
                    className={`p-xl w-full rounded-md cursor-pointer transition-all 
                        ${
                        selected === index
                            ? "bg-pink-200/35"
                            : "bg-pink-200/15"
                        }
                    `}
                    >
                    <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 relative">
                        <Image
                            src={data.option_icons[index]}
                            alt="icon"
                            fill
                            className="object-cover"
                            priority
                        />
                        </div>
                        <p className="flex-1 text-neutral-100 text-body-sm text-left leading-5">
                        {option}
                        </p>
                    </div>
                    </div>
                ))}
                </div>

                <div className="z-10 mt-auto mb-8 flex gap-4">
                    {current >1 && (
                        <Button
                            onClick={onBack}
                            variant="default"
                            size="large"
                            iconPos="none"
                            className="w-[70px] justify-center"
                        >Back</Button>
                    )}
                    
                    <Button onClick={() => onNext(selected ?? 0)} variant="default" size="large" iconPos="none" className="w-[70px] justify-center">
                        {current === total ? "Finish" : "Next"}
                    </Button>
                </div>
            </div>
        </section>
    )
}