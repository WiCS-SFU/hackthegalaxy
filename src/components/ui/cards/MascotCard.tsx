import clsx from "clsx";
import Image from "next/image";

interface MascotProps {
  name: string;
  nameColour: string;
  description: string;
  mascotImg: string;
  pawImg: string;
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
  mascotPos,
  pawPos,
  pawWidth,
  pawHeight,
  namePos,
}: MascotProps) {
  return (
    <section className="w-full rounded-xl bg-neutral-700 overflow-hidden">
      <div className="flex flex-col items-center text-center gap-lg">
        {/* 1) Name */}
        <div className={clsx("text-jocky-normal", nameColour, namePos)}>
          {name}
        </div>

        {/* 2) Image block (mascot + paw) — fixed height so all cards match; enough room for paw */}
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

        {/* 3) Description */}
        <div>
          <p className="w-full text-white text-body-mascot px-3xl pb-[21px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
export default MascotCard;
