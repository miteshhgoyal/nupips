"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(2);

  const faqs = [
    {
      question: "How do Nupips algorithmic trading bots work?",
      answer:
        "Our AI-powered algorithms analyze multiple timeframes, market correlations, and sentiment in real-time. They execute trades based on proven strategies backtested on years of historical data, automatically managing entries, exits, and risk parameters across Forex, Crypto, Stocks, and Commodities.",
    },
    {
      question: "Can I customize the trading algorithms?",
      answer:
        "Yes! You can adjust risk levels, select specific assets and markets, set maximum drawdown limits, and choose trading sessions. Our platform offers pre-configured strategies for beginners or full customization for advanced traders with API integrations.",
    },
    {
      question: "How quickly can I start automated trading?",
      answer:
        "You can start your first algorithm within 15 minutes of consultation. Simply choose your strategy (custom or ready-made), set risk parameters, and activate. Our bots begin trading immediately during active market hours with 24/7 monitoring and support.",
    },
    {
      question: "What platforms and brokers do you support?",
      answer:
        "We offer full compatibility with MT4, MT5, TradingView, Zerodha, Angel One, Binance, Bybit, and other global platforms. Our API integrations ensure seamless connectivity with your preferred broker for automated execution.",
    },
    {
      question: "How do you ensure security and transparency?",
      answer:
        "We use enterprise-grade encryption and secure hosting for all trading operations. Our systems provide clear reports with no hidden logic, real-time performance tracking, and complete transparency in all algorithmic decisions and trade executions.",
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
              New to algorithmic trading or optimizing existing strategies? Our
              FAQ covers everything about automated trading—from setup and
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
