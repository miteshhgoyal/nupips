"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(2); // Third FAQ is open by default

  const faqs = [
    {
      question: "How do the forex algorithms work?",
      answer:
        "Our AI-powered algorithms analyze multiple timeframes, currency correlations, and market sentiment in real-time. They execute trades based on proven strategies backtested on 20+ years of forex data, automatically managing entries, exits, and risk parameters.",
    },
    {
      question: "Can I customize the trading algorithms?",
      answer:
        "Yes! You can adjust risk levels, select specific currency pairs (majors, minors, exotics), set maximum drawdown limits, and choose trading sessions (London, New York, Tokyo, Sydney). Our platform offers pre-configured strategies or full customization.",
    },
    {
      question: "How quickly can I start automated trading?",
      answer:
        "You can deploy your first forex algorithm within 15 minutes of account setup. Simply choose your strategy, set risk parameters, fund your account, and activate. The algorithms begin trading immediately during active market hours across all major currency pairs.",
    },
    {
      question: "What happens during high-impact news events?",
      answer:
        "Our algorithms include news filtering and volatility protection. They can pause trading during major economic releases (NFP, FOMC, ECB), reduce position sizes during high volatility, or continue trading with tighter risk management based on your preferences.",
    },
    {
      question: "Do algorithms trade during all forex sessions?",
      answer:
        "Yes, our algorithms operate 24/5 across all major trading sessions - Tokyo (Asian), London (European), and New York (American). You can configure which sessions to trade based on your preferred currency pairs and risk tolerance, ensuring continuous market coverage.",
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
              Algorithmic Trading
              <br className="sm:block hidden" />
              <span className="text-neutral-400">Questions</span>
            </h2>
            <p
              className="text-xl text-neutral-400 font-normal leading-relaxed max-w-3xl mx-auto"
              style={{ opacity: 1, transform: "none" }}
            >
              New to forex algorithms or optimizing existing strategies? Our FAQ
              covers everything about automated trading—from setup and
              customization to risk management and performance optimization.
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
