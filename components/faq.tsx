"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does installation take?",
    answer:
      "Most installations are completed within 1-2 days, depending on the complexity of your chosen systems. Our team works efficiently to minimize disruption to your daily routine.",
  },
  {
    question: "What maintenance is required?",
    answer:
      "Our systems are designed for minimal maintenance. Water filters need replacement every 6-12 months, and we offer convenient subscription services. Annual check-ups ensure optimal performance.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes! We partner with leading financial institutions to offer flexible payment plans. Many customers qualify for 0% APR financing for up to 24 months.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "All our products come with a comprehensive 5-year warranty. We also offer extended warranty options for additional peace of mind.",
  },
  {
    question: "Can I start with one system and add more later?",
    answer:
      "Our modular approach allows you to start with any system and expand over time. All our solutions are designed to work seamlessly together.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#E8F5E9] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-light tracking-tight text-[#1B5E20] sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2E7D32]">
            Everything you need to know about our solutions
          </p>
        </div>

        <div className="mt-16 space-y-4 sm:mt-20">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-2xl bg-white transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-[#E8F5E9]"
              >
                <span className="text-lg font-light text-[#1B5E20]">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[#2E7D32] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-pretty leading-relaxed text-[#2E7D32]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
