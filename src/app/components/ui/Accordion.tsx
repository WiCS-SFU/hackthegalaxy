"use client";

import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

function Accordition({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col self-stretch pt-6.5 pb-6.5 border-b border-neutral-100 m-20">
      <div className="flex items-center justify-between">
        <span className="text-neutral-100 text-body-lg-bold">{question}</span>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="inline-flex h-6 w-6 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#F4F4F4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="py-4 text-neutral-100 text-body-sm">{answer}</div>
      )}
    </div>
  );
}
export default Accordition;
