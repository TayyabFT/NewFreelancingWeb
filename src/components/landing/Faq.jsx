"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const faqs = [
    {
      question: "What is AffiliTok?",
      answer:
        "AffiliTok is an AI-powered affiliate automation tool that helps brands increase engagement and streamline marketing efforts.",
    },
    {
      question: "How does AffiliTok improve ROI?",
      answer:
        "By leveraging AI for automation, AffiliTok helps brands optimize marketing strategies, track performance, and boost conversions effectively.",
    },
    {
      question: "How does AffiliTok improve ROI?",
      answer:
        "By leveraging AI for automation, AffiliTok helps brands optimize marketing strategies, track performance, and boost conversions effectively.",
    },
    {
      question: "How does AffiliTok improve ROI?",
      answer:
        "By leveraging AI for automation, AffiliTok helps brands optimize marketing strategies, track performance, and boost conversions effectively.",
    },
    {
      question: "How does AffiliTok improve ROI?",
      answer:
        "By leveraging AI for automation, AffiliTok helps brands optimize marketing strategies, track performance, and boost conversions effectively.",
    },
    {
      question: "Can I integrate AffiliTok with my existing tools?",
      answer:
        "Yes, AffiliTok supports integrations with various marketing platforms, CRMs, and analytics tools.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        {/* FAQ List */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer (Only show if selected) */}
              {openIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
