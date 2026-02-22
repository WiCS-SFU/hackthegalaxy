import clsx from "clsx";

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
    <section className="w-full py-xl rounded-xl bg-neutral-700 overflow-hidden">
      <div className="flex flex-col items-center text-center mx-auto max-w-5xl">
        <div
          className={clsx("text-jocky-normal rotate-[-7.461deg]", nameColour)}
        >
          {name}
        </div>
        <div className="relative inline-block w-[251.427px] h-[220.429px] aspect-auto">
          <img className="" src={mascotImg} alt={`${name}-img`}></img>
          <img
            className="absolute w-[145.457px] h-[128.499px] left-1/2 top-1/2 rotate-[17.884deg] "
            src={pawImg}
            alt={`${name}-paw`}
          ></img>
        </div>

        <p className="w-full text-white text-body-mascot px-3xl">
          {description}
        </p>
      </div>
    </section>
  );
}
export default MascotCard;
