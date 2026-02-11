import Image from "next/image";

type Tier = "gold" | "silver" | "bronze";

// SponsorsCard component with dynamic styling based on tier

const tierConfig: Record<Tier, { containerClass: string; imageWidth: number; imageHeight: number }> = {
  gold: {
    containerClass: "bg-purple-600 p-xl h-[150px]",
    imageWidth: 104,
    imageHeight: 152,
  },
  silver: {
    containerClass: "bg-[#AE6BDB] p-xl h-[150px]",
    imageWidth: 104,
    imageHeight: 152,
  },
  bronze: {
    containerClass: "bg-neutral-700 p-lg h-[150px]",
    imageWidth: 93.67,
    imageHeight: 56.2,
  },
};

// Added logo of sponsorships to the card

export default function SponsorCard({ tier }: { tier: Tier }) {
  const config = tierConfig[tier];
  
  return (
    <div
      className={`relative flex w-full items-center justify-center rounded-[6px] ${config.containerClass}`}
    >
      <Image
        src="/sponsors/transoftSolutionsLogo.png"
        alt="Transoft Solutions"
        width={config.imageWidth}
        height={config.imageHeight}
        className="object-contain"
        priority
      />
    </div>
  );
}