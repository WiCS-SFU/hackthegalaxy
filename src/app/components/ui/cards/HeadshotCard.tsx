import clsx from "clsx";

export enum Role {
  A = "Co-Chair",
  B = "Finance & Sponsorship",
  C = "Operations & Logistics",
  D = "Recruitment",
  E = "Visual Design & Marketing",
}

interface HeadshotCardProps {
  role: string;
  name: string;
  bio: string;
  image: string;
}

function HeadshotCard({ role, name, bio, image }: HeadshotCardProps) {
  const styleBase =
    "inline-flex items-center justify-center rounded-3xl px-xl py-lg text-left text-neutral-800";
  const maskId = `headshot-mask-${name.replace(/\s+/g, "")}`;
  const isCoChair = role === Role.A;

  const renderSvg = (
    viewBox: string,
    maskPath: string,
    imageWidth: number,
    imageHeight: number,
    roleBox: { x: number; y: number; width: number; height: number },
    maskSuffix: string,
    className?: string,
  ) => (
    <svg
      viewBox={viewBox}
      className={clsx("block w-full h-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id={`${maskId}-${maskSuffix}`}>
          <path d={maskPath} fill="#EFD8FF" />
        </mask>
      </defs>
      <g mask={`url(#${maskId}-${maskSuffix})`}>
        <rect width={imageWidth} height={imageHeight} fill="#CAC9D8" />
        <image
          href={image}
          width={imageWidth}
          height={imageHeight}
          preserveAspectRatio="xMidYMid slice"
        />
      </g>
      <foreignObject
        x={roleBox.x}
        y={roleBox.y}
        width={roleBox.width}
        height={roleBox.height}
      >
        <div className="flex h-full w-full items-center justify-center">
          <div
            className={clsx(styleBase, {
              "bg-pink-200 text-accent-lg": role === Role.A,
              "bg-system-green-200 text-accent-sm": role === Role.B,
              "bg-cyan-400 text-accent-sm": role === Role.C,
              "bg-purple-200 text-accent-sm": role === Role.D,
              "bg-system-yellow-200 text-accent-sm": role === Role.E,
            })}
          >
            {role}
          </div>
        </div>
      </foreignObject>
    </svg>
  );

  return (
    <div className="w-full">
      {/** Headshot Card Shape */}
      {isCoChair ? (
        <>
          {renderSvg(
            "0 0 361 388",
            "M361 301.369C361 314.624 350.255 325.369 337 325.369H237.515C224.26 325.369 213.515 336.114 213.515 349.369V363.369C213.515 376.624 202.769 387.369 189.515 387.369H24C10.7452 387.369 0 376.624 0 363.369V24C0 10.7452 10.7452 0 24 0H337C350.255 0 361 10.7452 361 24V301.369Z",
            361,
            388,
            { x: 224, y: 317, width: 135, height: 90 },
            "mobile",
            "md:hidden",
          )}
          {renderSvg(
            "0 0 572 388",
            "M572 311.369C572 324.624 561.255 335.369 548 335.369H458C444.745 335.369 434 346.114 434 359.369V363.369C434 376.624 423.255 387.369 410 387.369H24C10.7452 387.369 0 376.624 0 363.369V24C0 10.7452 10.7452 0 24 0H548C561.255 0 572 10.7452 572 24V311.369Z",
            572,
            387.369,
            { x: 409, y: 319, width: 200, height: 90 },
            "desktop",
            "hidden md:block",
          )}
        </>
      ) : (
        renderSvg(
          "0 0 361 388",
          "M361 301.369C361 314.624 350.255 325.369 337 325.369H237.515C224.26 325.369 213.515 336.114 213.515 349.369V363.369C213.515 376.624 202.769 387.369 189.515 387.369H24C10.7452 387.369 0 376.624 0 363.369V24C0 10.7452 10.7452 0 24 0H337C350.255 0 361 10.7452 361 24V301.369Z",
          361,
          388,
          { x: 224, y: 317, width: 135, height: 90 },
          "default",
        )
      )}

      {/** Name and Bio */}
      <div>
        <div className="text-heading-lg text-neutral-100 mt-xl mb-2.5">
          {name}
        </div>
        <div className="text-body-sm text-neutral-100 mb-xl">{bio}</div>
      </div>
    </div>
  );
}
export default HeadshotCard;
