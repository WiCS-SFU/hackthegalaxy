import ChevronDown from "./ChevronDown";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div className="border-b border-white py-xl">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between text-left gap-md"
      >
        <span className="text-body-lg text-neutral-100 font-bold">
          {question}
        </span>

        <ChevronDown open={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-md"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-body-sm text-neutral-100 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
