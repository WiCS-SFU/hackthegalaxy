"use client";

import { useState } from "react";
import { faqs } from "./faqData"; // Import FAQ data 
import FAQItem from "./FAQItem"; // Import each FAQ item comp

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // track which FAQ is open

  return (
    // main section for FAQ
    <section className="w-full bg-neutral-800 py-3xl px-xl flex flex-col -mt-[32px]">
      {/*Responsive Layout for Desktop and Mobile*/}
      <div className = "grid grid-cols-1 lg:grid-cols-2 gap-xl">
        <div>
          {/*Have Questions Text*/}
          <span className="text-accent-sm text-cyan-400">HAVE QUESTIONS?</span> 
          {/*FAQ Text*/}
          <h2 className="mt-xl text-heading-lg text-white">FAQs</h2> 
        </div> 
        <div className="mt-xl space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem // faq list item w q, answer, open state, toggle function
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
        ))}
        </div>
      </div>
    </section>
  );
}