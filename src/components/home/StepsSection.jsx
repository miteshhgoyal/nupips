"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StepsSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Choose Your League",
      description: [
        "Pick an account size that fits your",
        "strategy—up to $200K in funding available.",
      ],
    },
    {
      number: 2,
      title: "Pass the Challenge",
      description: [
        "One Step Challenge - Hit a 10% profit target.",
        "Two Step Challenge - Hit a 10% profit target in Phase 1 and an 8% target in Phase 2.",
        "Trader-Friendly Rules - No complicated restrictions.",
      ],
    },
    {
      number: 3,
      title: "Funded Capital",
      description: [
        "Keep up to 90% of your profits.",
        "Your edge. Your profits. Your freedom.",
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center py-16 sm:py-20 sm:my-48 my-24">
      <div className="w-full max-w-[2000px] mx-auto flex flex-col items-center relative overflow-hidden space-y-16">
        {/* Header */}
        <div className="z-10 flex flex-col items-center px-4 sm:px-0 w-full text-white">
          <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
            <h2 className="text-2xl sm:text-5xl font-semibold text-center mb-5">
              Get Funded in 3 Easy Steps
            </h2>
          </div>
          <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
            <p className="text-neutral-300 sm:px-0 px-6 max-w-xl mx-auto text-sm sm:text-lg text-center mb-10">
              Simple. Fast. Funded.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div
            className="lg:hidden w-full max-w-md mx-auto"
            style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
          >
            <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(calc(-${currentStep * 100}% + 0px))`,
                }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div
                      className="relative p-8 border border-white/10 rounded-3xl backdrop-blur-sm shadow-2xl transition-all duration-300 flex flex-col min-h-[220px] w-full flex-shrink-0"
                      style={{
                        opacity: index === currentStep ? 1 : 0,
                        filter:
                          index === currentStep ? "blur(0px)" : "blur(6px)",
                        transform:
                          index === currentStep
                            ? "none"
                            : "translateY(15px) scale(0.99)",
                      }}
                    >
                      <div className="absolute top-6 right-6 bg-black/50 text-neutral-400 border border-[#B1B1B1] text-xs px-3 py-1.5 rounded-lg font-semibold backdrop-blur-sm">
                        Step {step.number}
                      </div>
                      <div className="flex flex-col justify-end flex-1 mt-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                            {step.title}
                          </h3>
                          <div className="space-y-3">
                            {step.description.map((line, lineIndex) => (
                              <p
                                key={lineIndex}
                                className="text-neutral-400 leading-5 sm:leading-3 text-sm sm:text-base"
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between px-4">
              <div className="flex justify-center mt-4 space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${
                      index === currentStep
                        ? "bg-primary border-primary"
                        : "bg-transparent border-primary/50 hover:border-primary"
                    }`}
                    onClick={() => setCurrentStep(index)}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <button
                  className="p-2 rounded-full border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                >
                  <ChevronLeft className="w-5 h-5 text-[#FF5B19]" />
                </button>
                <button
                  className="p-2 rounded-full border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  onClick={() =>
                    setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
                  }
                >
                  <ChevronRight className="w-5 h-5 text-[#FF5B19]" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div
            className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full"
            style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
          >
            {/* Step 1 */}
            <div
              className="relative p-8 border border-white/10 rounded-3xl backdrop-blur-sm shadow-2xl transition-all duration-300 flex flex-col"
              style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
            >
              <div className="absolute top-6 right-6 bg-black/50 text-neutral-400 border border-[#B1B1B1] text-xs px-3 py-1.5 rounded-lg font-semibold backdrop-blur-sm">
                Step 1
              </div>
              <div className="flex flex-col justify-end flex-1 mt-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                    Choose Your League
                  </h3>
                  <div className="space-y-3">
                    <p className="text-neutral-400 leading-5 sm:leading-3 text-sm sm:text-base">
                      Pick an account size that fits your
                    </p>
                    <p className="text-neutral-400 leading-5 sm:leading-3 text-sm sm:text-base">
                      strategy—up to $200K in funding available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Tall */}
            <div
              className="relative p-8 border border-white/10 rounded-3xl backdrop-blur-sm shadow-2xl transition-all duration-300 lg:row-span-2 flex flex-col"
              style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
            >
              <div className="absolute top-6 right-6 bg-black/50 text-neutral-400 border border-[#B1B1B1] text-xs px-3 py-1.5 rounded-lg font-semibold backdrop-blur-sm">
                Step 3
              </div>
              <div className="flex flex-col justify-end flex-1 mt-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                    Funded Capital
                  </h3>
                  <div className="space-y-3">
                    <p className="text-neutral-400 leading-5 sm:leading-3 text-sm sm:text-base">
                      Keep up to 90% of your profits.
                    </p>
                    <p className="text-neutral-400 leading-5 sm:leading-3 text-sm sm:text-base">
                      Your edge. Your profits. Your freedom.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="relative p-8 border border-white/10 rounded-3xl backdrop-blur-sm shadow-2xl transition-all duration-300 flex flex-col"
              style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
            >
              <div className="absolute top-6 right-6 bg-black/50 text-neutral-400 border border-[#B1B1B1] text-xs px-3 py-1.5 rounded-lg font-semibold backdrop-blur-sm">
                Step 2
              </div>
              <div className="flex flex-col justify-end flex-1 mt-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                    Pass the Challenge
                  </h3>
                  <div className="space-y-3">
                    <p className="text-neutral-400 leading-5 sm:leading-3 text-sm sm:text-base">
                      One Step Challenge - Hit a 10% profit target.
                    </p>
                    <p className="text-neutral-400 leading-5 sm:leading-3 text-sm sm:text-base">
                      Two Step Challenge - Hit a 10% profit target in
                    </p>
                    <p className="text-neutral-400 leading-5 sm:leading-3 text-sm sm:text-base">
                      Phase 1 and a 8% target in Phase 2.
                    </p>
                    <p className="text-neutral-400 leading-5 sm:leading-3 text-sm sm:text-base">
                      Trader-Friendly Rules - No complicated restrictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
