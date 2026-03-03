import clsx from "clsx";
import Image from "next/image";

interface MascotProps {
  name: string;
  nameColour: string;
  description: string;
  mascotImg: string;
  pawImg: string;
  bgImg: string;
  mascotPos: string;
  pawPos: string;
  pawWidth: number;
  pawHeight: number;
  namePos: string;
}

function MascotCard({
  name,
  nameColour,
  description,
  mascotImg,
  pawImg,
  bgImg,
  mascotPos,
  pawPos,
  pawWidth,
  pawHeight,
  namePos,
}: MascotProps) {
  return (
    <section className="relative w-full rounded-xl bg-neutral-700 overflow-hidden">
      {/* Star Backgrounds */}
      <Image
        src={bgImg}
        alt={`${name}-bg`}
        fill
        className="absolute inset-0 object-cover pointer-events-none -z-1"
      />

      <div className="flex flex-col items-center text-center gap-lg">
        {/* Name */}
        <div className={clsx("text-jocky-normal", nameColour, namePos)}>
          {name}
        </div>

        {/* Image block (mascot + paw) */}
        <div className="relative w-[251.427px] flex items-start justify-center">
          <div className="relative w-full h-[220.429px]">
            <Image
              className={clsx("object-contain", mascotPos)}
              src={mascotImg}
              alt={`${name}-img`}
              fill
            />
            <div className={clsx("absolute", pawPos)}>
              <Image
                src={pawImg}
                alt={`${name}-paw`}
                width={pawWidth}
                height={pawHeight}
                className="object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="w-full text-white text-body-mascot px-3xl pb-[21px]">
            {description}
          </p>
        </div>
        {/* Star Backgrounds */}
        <Image
          src={bgImg}
          alt={`${name}-bg`}
          fill
          className="object-cover pointer-events-none z-9"
        />
      </div>
    </section>
  );
}
export default MascotCard;
