"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/buttons/Button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { chaoticOrbit } from 'ldrs';
import { Jockey_One } from "next/font/google";

export default function Results() {
    const params = useSearchParams();
    const router = useRouter();
    const type = params.get("type");

    const [loading, setLoading] = useState(true);

    // loading animation 
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 2000); // 2s loading screen

        return () => clearTimeout(timer);
    }, []);

    chaoticOrbit.register();

    const characters = {
    piper: {
        name: "Piper",
        video: "/piper.mp4",
    },
    ping: {
        name: "Ping",
        video: "/ping.mp4",
    },
    poppy: {
        name: "Poppy",
        video: "/poppy.mp4",
    },
    };
    
    const character = characters[type as keyof typeof characters];

    // Loading Screen
    if (loading) {
        return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-neutral-800">
            <div className="absolute z-0 w-[772.06px] h-[772.06px] 
                    left-[-300px] top-[460px]
                    bg-[radial-gradient(ellipse_72.73%_75.28%_at_67.98%_65.87%,_var(--pink-100,_#F7F0FB)_0%,_var(--pink-400,_#BE89E2)_23%,_var(--purple-600,_#4119B8)_47%,_var(--purple-800,_#16064A)_77%,_var(--neutral-800,_#171621)_100%)] 
                    rounded-full blur-[53.84px]"/>
            
            <l-chaotic-orbit
                size="45"
                speed="1.5"
                color="white"
            ></l-chaotic-orbit>

            <div className="mt-3 text-accent-lg text-white">
                Loading...
            </div>

        </section>
        );
    }

    return(
        <section className="relative min-h-screen bg-neutral-800 pb-30">
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/20 z-1" />
            
            <div>
                <div className="absolute z-0 w-[772.06px] h-[772.06px] 
                    left-[-300px] top-[460px]
                    bg-[radial-gradient(ellipse_72.73%_75.28%_at_67.98%_65.87%,_var(--pink-100,_#F7F0FB)_0%,_var(--pink-400,_#BE89E2)_23%,_var(--purple-600,_#4119B8)_47%,_var(--purple-800,_#16064A)_77%,_var(--neutral-800,_#171621)_100%)] 
                    rounded-full blur-[53.84px]"/>
            
                <div className="relative flex flex-col items-center text-center z-10">
                    <div className="mt-[30vh] mb-6">
                        <video
                            src={character.video}
                            autoPlay
                            loop
                            playsInline
                            className="w-[275px] h-auto"
                        ></video>
                    </div>

                    <div className="text-heading-lg">
                        You got <span className="text-jocky-normal text-5xl ml-1">{character.name}</span>
                    </div>

                    <div className="z-10 mt-25">
                            <Button 
                                onClick={() => router.push(`/quiz/results/details?type=${type}`)} 
                                variant="ghost" 
                                size="large" 
                                iconPos="right"
                                icon={<ArrowDownIcon className="h-4 w-4 stroke-3" />} 
                                className="w-[181px] justify-center"
                            >
                                Read More
                            </Button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}