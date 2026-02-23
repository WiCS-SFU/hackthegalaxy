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
  namePos,
}: MascotProps) {
  return (
    <section className="w-full rounded-xl bg-neutral-700 overflow-hidden">
      <div className="flex flex-col items-center text-center mx-auto max-w-5xl gap-lg">
        <div className={clsx("text-jocky-normal", nameColour, namePos)}>
          {name}
        </div>
        <div className="relative inline-block w-[251.427px] h-[220.429px]">
          <Image
            className={clsx("w-full h-full object-contain", mascotPos)}
            src={mascotImg}
            alt={`${name}-img`}
            fill
          />
          <div
            className={clsx(
              "absolute right-0 bottom-0 w-[120px] h-[120px] pointer-events-none",
              pawPos,
            )}
          >
            <Image
              src={pawImg}
              alt={`${name}-paw`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="w-full text-white text-body-mascot px-3xl pb-[21px]">
          {description}
        </p>
      </div>
    </section>
  );
}
export default MascotCard;
