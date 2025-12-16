"use client"
import { useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, PayPal, and Apple Pay.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes! We offer free shipping on orders over $50 within the USA.",
  },
  {
    question: "Can I return a product if I don’t like it?",
    answer: "Absolutely! You can return products within 30 days of purchase for a full refund.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, you’ll receive a tracking number via email.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);


    if (contentRefs.current.length !== faqs.length) {
    contentRefs.current = Array(faqs.length).fill(null);
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 font-medium text-gray-800"
              >
                <span>{faq.question}</span>
                <FiChevronDown
                  size={22}
                  className={`text-violet-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Smooth Content */}
              <div
                ref={(el) =>  {
                    (contentRefs.current[index] = el)
                }}
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight ?? 0}px`
                      : "0px",
                }}
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              >
                <p className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}