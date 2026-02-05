import clsx from "clsx";
import CosmosHeadshot from "@/app/assets/Cosmos_Headshot.png";

export enum Role {
  A = "Co-Chair",
  B = "Finance & Sponsorship",
  C = "Operations & Logistics",
  D = "Visual Design & Marketing",
  E = "Recruitment",
}

interface HeadshotCardProps {
  role: string;
  name: string;
  bio: string;
}

function HeadshotCard({ role, name, bio }: HeadshotCardProps) {
  const styleBase =
    "inline-flex h-full w-full items-center justify-center rounded-3xl pt-lg pb-lg pl-xl pr-xl text-neutral-800";

  return (
    <div className="flex w-full max-w-[420px] flex-col">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 361 388"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <mask
          id="headshot-mask"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="361"
          height="388"
        >
          <path
            d="M361 311.369C361 324.624 350.255 335.369 337 335.369H247C233.745 335.369 223 346.114 223 359.369V363.369C223 376.624 212.255 387.369 199 387.369H24C10.7452 387.369 0 376.624 0 363.369V24C0 10.7452 10.7452 0 24 0H337C350.255 0 361 10.7452 361 24V311.369Z"
            fill="#EFD8FF"
          />
        </mask>
        <g mask="url(#headshot-mask)">
          <rect width="361" height="388" fill="#CAC9D8" />
          <image
            href={CosmosHeadshot.src}
            width="361"
            height="387.369"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
        <foreignObject x="64%" y="88%" width="36%" height="14%">
          <div className="h-full w-full">
            <div
              className={clsx(styleBase, {
                "bg-pink-200 text-accent-md": role === Role.A,
                "bg-system-green-200 text-accent-sm": role === Role.B,
                "bg-cyan-400 text-accent-sm": role === Role.C,
                "bg-system-yellow-200 text-accent-sm": role === Role.D,
                "bg-purple-200 text-accent-sm": role === Role.E,
              })}
            >
              {role}
            </div>
          </div>
        </foreignObject>
      </svg>
      <div className="text-heading-lg mt-xl mb-[10px]">{name}</div>
      <div className="mb-xl">{bio}</div>
    </div>
  );
}
export default HeadshotCard;
