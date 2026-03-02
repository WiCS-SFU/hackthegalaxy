"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function Details() {
    const params = useSearchParams();
    const router = useRouter();
    const type = params.get("type");

    const characters = {
    piper: {
        name: "Piper",
        video: "/piper.mp4",
        description:
        `You believe anything is possible — you just haven't found the right API yet.
        \nYour bag defies physics: a USB drive for every occasion, a portable soldering iron nobody expected but everyone eventually needed, and a stash of genuinely good tea that you absolutely planned ahead for.
        \nYou don't make a big deal out of sliding half your Pocky across the table or handing someone a spare sticker; you're already back to typing 120WPM before they can say thank you.
        \nBut when the hood goes up and the lo-fi kicks in, you shift into a different gear entirely. Things get built, refactored, and left cleaner than you found them, with comments in the code so the next person actually understands what happened.`,
    },
    ping: {
        name: "Ping",
        video: "/ping.mp4",
        description: 
        `You have an almost supernatural sense for when things are about to get good. The pizza notification hasn't gone off yet and you're already in line.
        \nMost people grab a sticker from a sponsor booth and move on; you walk away with the limited-edition shirt after an interesting 20 minute conversation about cloud infrastructure.
        \nYou're the one keeping the team's energy alive, dropping perfectly timed memes and knowing when the vibe needs a reset before anyone else has noticed it's fading. The peanut butter debate wasn't on the agenda, but it was exactly what the team needed.
        \nThe domain name search was a three hour commitment made with complete sincerity, and you'd do it again. You're the glue, the hype, and the heart of the whole thing.`,
    },
    poppy: {
        name: "Poppy",
        video: "/poppy.mp4",
        description: 
        `You show up to every pre-hackathon workshop — not always because you need the tool, but because knowledge is currency and the presenter is probably worth connected with on LinkedIn.
        \nWhen it comes to the build, you have standards. A flashy UI with shaky logic makes you uncomfortable. You'd rather have something airtight than something pretty that falls apart under one good question from a judge. 
        \nBefore any code gets written, you're already at the whiteboard, boxes and arrows taking shape, fueled by coffee consumed with purpose and frequency. 
        \nAnd when the final hour hits, while everyone else is pushing last-minute commits, you're crafting the Devpost submission like it's the project itself. Architecture diagrams, a README that actually explains things, and a "Technical Difficulties" section so well written that your bugs sound like intentional design decisions.`,
    },
    };

    const character = characters[type as keyof typeof characters];

    if (!character) return null;

    return (
        <section className="relative min-h-screen bg-neutral-800 pb-30">
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/20 z-1" />
            
            <div>
                <div className="absolute z-0 w-[772.06px] h-[772.06px] 
                    left-[-300px] top-[460px]
                    bg-[radial-gradient(ellipse_72.73%_75.28%_at_67.98%_65.87%,_var(--pink-100,_#F7F0FB)_0%,_var(--pink-400,_#BE89E2)_23%,_var(--purple-600,_#4119B8)_47%,_var(--purple-800,_#16064A)_77%,_var(--neutral-800,_#171621)_100%)] 
                    rounded-full blur-[53.84px]"/>
            
                <div className="relative flex flex-col items-center text-center z-10">
                    <div className="relative mt-30 px-xl text-left ">
                        <div className="text-display-md mb-3xl">
                            {character.name}
                        </div>

                        <div className="text-body-sm whitespace-pre-line">
                            {character.description}
                        </div>

                        <div className="mt-25 flex justify-center">
                            <video
                                src={character.video}
                                autoPlay
                                loop
                                playsInline
                                className="w-[130px] h-auto"
                            ></video>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}