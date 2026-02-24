'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
  title?: string;
}

export default function FAQ({ 
  items = [
    {
      question: "When will I get access?",
      answer: "We are rolling out invites weekly to ensure the best experience. You'll hear from us soon."
    },
    {
      question: "Is there a free tier?",
      answer: "Yes, beta users will get a free forever tier with generous limits."
    }
  ],
  title = "Frequently Asked Questions"
}: FAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq-section my-28 w-full max-w-4xl">
      <h2 className="text-2xl md:text-5xl font-bold text-gray-900 text-center mb-10">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="faq-item bg-white rounded-lg border border-gray-200 shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="accordion-button w-full flex items-center justify-between px-6 py-3 text-left"
            >
              <span className="font-semibold text-gray-900 text-[17px]">{item.question}</span>
              <svg
                className={`w-5 h-5 text-red-700 transition-transform duration-500 ${
                  openFAQ === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 " />
              </svg>
            </button>
            <div
              className={`accordion-content ${openFAQ === index ? 'open' : ''}`}
            >
              <div className="px-6 pt-3 pb-4 text-gray-700 text-[16px] leading-relaxed border-t border-gray-100">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .accordion-button {
          transition: all 0.3s ease-out;
        }

        .accordion-button:hover {
          color: #dc2626;
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.7s ease-out;
        }

        .accordion-content.open {
          max-height: 200px;
        }
      `}</style>
    </div>
  );
}
