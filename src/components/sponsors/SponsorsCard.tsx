import Image from "next/image";
import Link from "next/link";

type Tier = "gold" | "silver" | "bronze";

type SponsorCardProps = {
  tier: Tier;
  imageSrc: string;
  altText: string;
  href: string; // sponsor link
};

// SponsorsCard component with dynamic styling based on tier

const tierConfig: Record<Tier, { containerClass: string; imageWidth: number; imageHeight: number }> = {
  gold: {
    containerClass: "bg-purple-600 p-xl h-[150px]",
    imageWidth: 150,
    imageHeight: 152,
  },
  silver: {
    containerClass: "bg-[#AE6BDB] p-xl h-[150px]",
    imageWidth: 175,
    imageHeight: 152,
  },
  bronze: {
    containerClass: "bg-neutral-700 p-lg h-[150px]",
    imageWidth: 120,
    imageHeight: 56.2,
  },
};

// Added logo of sponsorships to the card
export default function SponsorCard({ tier, imageSrc, altText, href }: SponsorCardProps) {
  const config = tierConfig[tier];
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div
        className={`relative flex w-full items-center justify-center rounded-[6px] ${config.containerClass}`}
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={config.imageWidth}
          height={config.imageHeight}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}