interface FAQItemProps {
  question: string; // faq question 
  answer: string; // faq answer 
  isOpen: boolean; // is faq open state
  onToggle: () => void; // function to open/close faq
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-white pb-4">
      <button onClick={onToggle} aria-expanded={isOpen} className="flex w-full justify-between text-left">
        {/* Question text */}
        <span className="text-body-lg text-white">{question}</span> 
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          {/* Answer Text */}
          <p className="text-body-sm text-white">{answer}</p> 
        </div>
      </div>
    </div>
  );
}