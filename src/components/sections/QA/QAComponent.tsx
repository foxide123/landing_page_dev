"use client";

import { useState } from "react";
import { QAData } from "@/data/QAData";

export default function QAComponent() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <div className=" mt-8 space-y-4">
      {QAData.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 cursor-pointer bg-white shadow-md"
        >
          {/* Question */}
          <div
            className="flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="font-medium text-xl">{faq.question}</h2>
            <span className="text-gray-500 text-2xl">
              {openQuestion === index ? "−" : "+"}
            </span>
          </div>

          {/* Answer (Show/Hide based on state) */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openQuestion === index
                ? "max-h-40 opacity-100 mt-2"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
