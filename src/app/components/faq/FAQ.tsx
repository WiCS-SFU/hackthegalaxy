"use client";

import { useState } from "react";
import { faqs } from "./faq-data"; // Import FAQ data 
import FAQItem from "./FAQItem"; // Import each FAQ item comp

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // track which FAQ is open

  return (
    // main section for FAQ
    <section className="min-h-screen px-4 py-8">
      {/*Have Questions Text*/}
      <span className="text-accent-sm text-[#B0DDED]">HAVE QUESTIONS?</span> 
      {/*FAQ Text*/}
      <h2 className="mt-4 text-heading-lg text-white">FAQs</h2>  
      <div className="mt-6 space-y-4">
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
    </section>
  );
}