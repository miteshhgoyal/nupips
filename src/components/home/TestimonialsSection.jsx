'use client';
import React from "react";
import { StarIcon } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Game-changer for my forex trading! The algorithms run 24/7 and I've made consistent profits even while sleeping. Made $8K in my first month with their EUR/USD bot.",
      name: "David Chen",
      role: "Algorithmic Trader",
    },
    {
      text: "Finally found forex algorithms that actually work. No more emotional trading or missing London session opportunities. The backtesting results matched live performance perfectly.",
      name: "Sarah Williams",
      role: "Forex Specialist",
    },
    {
      text: "Their AI-powered forex bots are incredible. Set it up once and it trades all major pairs automatically. Already withdrawn $15K in profits from GBPUSD and EURUSD strategies.",
      name: "Marcus Rodriguez",
      role: "Currency Trader",
    },
    {
      text: "Best algo trading platform for forex! The risk management is bulletproof and customer support knows their stuff. My portfolio grew 40% in 3 months on autopilot.",
      name: "Jennifer Kim",
      role: "Automated Trader",
    },
    {
      text: "No more manual trading stress. Their algorithms caught every major USD move while I focused on my day job. The profit-sharing model is transparent and fair.",
      name: "Robert Thompson",
      role: "Part-time Trader",
    },
    {
      text: "Impressive forex automation! The bots trade across all sessions - Tokyo, London, New York. Made $12K last quarter just from their momentum strategies alone.",
      name: "Lisa Anderson",
      role: "Quantitative Trader",
    },
  ];

  return (
    <div className="flex items-center justify-center py-16 sm:py-20 sm:my-48 my-24">
      <div className="max-w-[2000px] mx-auto flex flex-col items-center justify-center relative overflow-hidden space-y-16">
        {/* Container with backdrop */}
        <div
          className="max-w-7xl mx-auto w-full items-center rounded-2xl px-4 py-16 backdrop-blur-sm border-2 bg-black/40 border-gray-500/10 justify-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          {/* Header */}
          <div
            className="z-10 flex flex-col items-center px-4 sm:px-0 w-full text-white"
            style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
          >
            <h2 className="text-2xl sm:text-5xl font-semibold text-center mb-5">
              Real algorithms deliver{" "}
              <span className="text-neutral-400">
                <br /> Real profits
              </span>
            </h2>
            <p className="text-neutral-300 sm:px-0 px-6 max-w-xl mx-auto text-sm sm:text-lg text-center mb-10">
              See what forex traders are saying about our AI-powered algorithms.
            </p>
          </div>

          {/* Scrolling Testimonials */}
          <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
            <div className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
              <ul className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll-left">
                {/* First set of testimonials */}
                {testimonials.map((testimonial, index) => (
                  <li
                    key={index}
                    className="relative w-[350px] max-w-full shrink-0 rounded-2xl p-[2px] md:w-[400px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, #B12424, #FF5B19)",
                    }}
                  >
                    <div className="bg-black rounded-2xl px-8 py-8 h-full flex flex-col justify-between">
                      <blockquote>
                        <div className="relative z-20 text-sm leading-[1.6] font-bold text-white">
                          {testimonial.text}
                        </div>
                      </blockquote>

                      <div className="relative z-20 mt-6 flex flex-col gap-2">
                        <span className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-[#FF5B19]">
                            {testimonial.name}
                          </span>
                          <span className="text-sm font-bold text-[#FF5B19]">
                            {testimonial.role}
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
                {/* Duplicate set for infinite scroll */}
                {testimonials.map((testimonial, index) => (
                  <li
                    key={`duplicate-${index}`}
                    className="relative w-[350px] max-w-full shrink-0 rounded-2xl p-[2px] md:w-[400px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, #B12424, #FF5B19)",
                    }}
                  >
                    <div className="bg-black rounded-2xl px-8 py-8 h-full flex flex-col justify-between">
                      <blockquote>
                        <div className="relative z-20 text-sm leading-[1.6] font-bold text-white">
                          {testimonial.text}
                        </div>
                      </blockquote>

                      <div className="relative z-20 mt-6 flex flex-col gap-2">
                        <span className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-[#FF5B19]">
                            {testimonial.name}
                          </span>
                          <span className="text-sm font-bold text-[#FF5B19]">
                            {testimonial.role}
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
