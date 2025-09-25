"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(2); // Third FAQ is open by default

  const faqs = [
    {
      question: "How does the evaluation work?",
      answer:
        "Our evaluation process consists of a trading challenge where you need to demonstrate consistent profitability while following our risk management rules. You'll trade in a simulated environment that mirrors real market conditions.",
    },
    {
      question: "What happens after I pass the evaluation?",
      answer:
        "Once you successfully complete the evaluation, you'll receive access to a funded trading account where you can trade with our capital and keep a significant portion of the profits you generate.",
    },
    {
      question: "When can I request my first payout?",
      answer:
        "You can request your first payout seven calendar days after placing your first trade on the funded account, provided you've made profit for at least three separate days. After that, you're eligible for weekly payouts every Friday, as long as you continue to follow all risk rules.",
    },
    {
      question: "What withdrawal options are available if I paid via UPI?",
      answer:
        "We support multiple withdrawal methods including bank transfers, UPI, and cryptocurrency options. The method you choose for withdrawal doesn't need to match your payment method.",
    },
    {
      question: "Can I hold trades over the weekend?",
      answer:
        "Yes, you can hold positions over the weekend. However, be aware that weekend gaps and Monday opening prices may affect your positions due to news events that occur when markets are closed.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Header */}
          <div className="space-y-6 text-center">
            <h2
              className="text-2xl sm:text-5xl font-semibold leading-tight"
              style={{ opacity: 1, transform: "none" }}
            >
              Frequently Asked
              <br className="sm:block hidden" />
              <span className="text-neutral-400">Questions</span>
            </h2>
            <p
              className="text-xl text-neutral-400 font-normal leading-relaxed max-w-3xl mx-auto"
              style={{ opacity: 1, transform: "none" }}
            >
              Whether you're new to prop trading or already managing funded
              capital, our FAQ covers everything you need to know—rules,
              payouts, news and more.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 w-full max-w-3xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black border-2 border-white/10 rounded-lg"
              >
                <button
                  className="w-full flex justify-between items-center text-left p-5 md:p-6 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="sm:text-xl text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <Minus className="text-white flex-shrink-0 ml-4 w-5 h-5" />
                  ) : (
                    <Plus className="text-white flex-shrink-0 ml-4 w-5 h-5" />
                  )}
                </button>

                {openFAQ === index && (
                  <div
                    className="overflow-hidden"
                    style={{ opacity: 1, height: "auto", marginTop: "0px" }}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 sm:text-xl text-base font-normal text-[#B2B2B2]">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
