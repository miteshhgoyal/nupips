"use client";
import React, { useState } from "react";
import { Crown } from "lucide-react";

const PricingSection = () => {
  const [selectedAmount, setSelectedAmount] = useState("$5K");
  const [selectedStep, setSelectedStep] = useState("One Step");

  // Pricing data for different amounts
  const pricingData = {
    $5K: {
      oneStep: {
        accountSize: "$5K",
        profitSplit: "80%",
        profitTarget: "10% ($500)",
        maxDailyLoss: "3% ($150)",
        maxDrawdown: "6% ($300)",
        leverage: "Up to 1:100",
        platform: "MT5",
        challengeFee: "$70.00",
      },
    },
    // Add more pricing data as needed
  };

  const amounts = ["$5K", "$15K", "$25K", "$50K", "$100K", "$200K"];

  return (
    <div className="flex items-center justify-center py-16 sm:py-20">
      <div className="bg-transparent flex flex-col items-center justify-center px-4 space-y-16">
        <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
          <div className="w-full mb-48 max-w-lg mx-auto px-3 sm:px-0 text-white relative">
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-10">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">
                  Pick. Trade. Profit.
                </h1>
                <p className="text-gray-400 text-sm sm:text-base px-2 sm:px-0">
                  Get funded up to $200K with fast payouts and high profit
                  splits.
                </p>
              </div>

              {/* Amount Selection Tabs */}
              <div
                className="p-[1px] w-full max-w-fit md:p-[2px] rounded-full mx-auto mb-8 sm:mb-12"
                style={{
                  background:
                    "linear-gradient(190.25deg, #3E3E3E 12.7%, #FF3500 48.47%, #3E3E3E 81.58%)",
                }}
              >
                <div
                  id="interactive-pricing"
                  className="flex justify-center items-center bg-black rounded-full p-1 px-2 gap-1 sm:gap-2"
                >
                  {amounts.map((amount, index) => (
                    <div
                      key={amount}
                      className="p-[0.5px] md:p-[1px] justify-center items-center text-center rounded-full"
                    >
                      {index === 0 ? (
                        // First button (selected)
                        <button
                          className="bg-primary py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm rounded-full text-white transition-colors duration-300 flex justify-center items-center whitespace-nowrap"
                          onClick={() => setSelectedAmount(amount)}
                        >
                          {amount}
                        </button>
                      ) : amount === "$100K" ? (
                        // Special $100K button with icon
                        <div
                          className="p-[0.5px] md:p-[1px] justify-center items-center text-center rounded-full"
                          style={{
                            background:
                              "linear-gradient(59.67deg, #3E3E3E 11.14%, #7E7E7E 46%, #3E3E3E 80.87%)",
                          }}
                        >
                          <button
                            className="bg-black py-1 sm:py-2 text-xs sm:text-sm rounded-full transition-colors duration-300 flex justify-center items-center whitespace-nowrap text-[#FF5B19] px-2 sm:px-3 gap-1 hover:bg-black hover:text-primary"
                            onClick={() => setSelectedAmount(amount)}
                          >
                            <Crown className="text-primary" size={20} />
                            {amount}
                          </button>
                        </div>
                      ) : (
                        // Regular buttons
                        <div
                          className="p-[0.5px] md:p-[1px] justify-center items-center text-center rounded-full"
                          style={{
                            background:
                              "linear-gradient(59.67deg, #3E3E3E 11.14%, #7E7E7E 46%, #3E3E3E 80.87%)",
                          }}
                        >
                          <button
                            className="bg-black py-1 sm:py-2 text-xs sm:text-sm rounded-full transition-colors duration-300 flex justify-center items-center whitespace-nowrap px-2 sm:px-4 text-gray-400 hover:bg-gray-900/70"
                            onClick={() => setSelectedAmount(amount)}
                          >
                            {amount}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Card */}
              <div
                className="p-[2px] rounded-4xl"
                style={{
                  background:
                    "linear-gradient(42.8deg, #3E3E3E 28.97%, #FF3500 52.6%, #3E3E3E 76.22%)",
                }}
              >
                <div className="rounded-4xl relative overflow-hidden bg-gradient-to-r from-black to bg-primary">
                  {/* Background Blur Effect */}
                  <div className="w-64 h-64 sm:w-96 sm:h-96 overflow-hidden left-[200px] sm:left-[369px] top-[250px] sm:top-[351px] absolute bg-zinc-400 rounded-full blur-[250px] sm:blur-[217.70px] z-0 pointer-events-none"></div>

                  {/* Card Content */}
                  <div className="bg-black p-4 sm:p-6 rounded-br-4xl">
                    {/* Step Selection */}
                    <div className="flex justify-center space-x-2 sm:space-x-4 my-4 pb-4">
                      <button
                        className="px-3 sm:px-6 py-2 text-xs sm:text-sm rounded-lg bg-primary text-white transition-colors duration-300"
                        onClick={() => setSelectedStep("One Step")}
                      >
                        One Step
                      </button>
                      <div
                        className="rounded-lg p-[1px]"
                        style={{
                          background:
                            "linear-gradient(150.38deg, #3E3E3E 11.4%, #FF3500 41.19%, #3E3E3E 73.98%)",
                        }}
                      >
                        <button
                          className="w-full bg-black text-gray-400 px-3 sm:px-6 py-2 text-xs sm:text-sm rounded-lg hover:bg-gray-900/70 transition-colors duration-300"
                          onClick={() => setSelectedStep("Two Step")}
                        >
                          Two Step
                        </button>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="flex justify-between items-start px-2 sm:px-4 mb-4 sm:mb-6">
                      <h2 className="text-2xl sm:text-4xl ">
                        {selectedAmount}
                      </h2>
                      <div className="text-right">
                        <p className="text-xs sm:text-sm text-primary font-semibold">
                          {selectedStep}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 pl-2 sm:pl-4">
                      <div className="my-4 flex flex-row items-center text-sm mb-1 relative">
                        <div className="flex items-center text-zinc-400 min-w-[140px] sm:min-w-[180px]">
                          <span className="text-xs sm:text-sm">
                            Account Size
                          </span>
                        </div>
                        <div className="mx-1 sm:mx-2 text-gray-300 w-3">:</div>
                        <div className="text-white font-semibold text-xs sm:text-sm">
                          $5K
                        </div>
                      </div>

                      <div className="my-4 flex flex-row items-center text-sm mb-1 relative">
                        <div className="flex items-center text-zinc-400 min-w-[140px] sm:min-w-[180px]">
                          <span className="text-xs sm:text-sm">
                            Profit Split
                          </span>
                        </div>
                        <div className="mx-1 sm:mx-2 text-gray-300 w-3">:</div>
                        <div className="text-white font-semibold text-xs sm:text-sm">
                          80%
                        </div>
                      </div>

                      <div className="my-4 flex flex-row items-center text-sm mb-1 relative">
                        <div className="flex items-center text-zinc-400 min-w-[140px] sm:min-w-[180px]">
                          <span className="text-xs sm:text-sm">
                            Profit Target
                          </span>
                        </div>
                        <div className="mx-1 sm:mx-2 text-gray-300 w-3">:</div>
                        <div className="text-white font-semibold text-xs sm:text-sm">
                          10% ($500)
                        </div>
                      </div>

                      <div className="my-4 flex flex-row items-center text-sm mb-1 relative">
                        <div className="flex items-center text-zinc-400 min-w-[140px] sm:min-w-[180px]">
                          <span className="text-xs sm:text-sm">
                            Max. Daily Loss
                          </span>
                        </div>
                        <div className="mx-1 sm:mx-2 text-gray-300 w-3">:</div>
                        <div className="text-white font-semibold text-xs sm:text-sm">
                          3% ($150)
                        </div>
                      </div>

                      <div className="my-4 flex flex-row items-center text-sm mb-1 relative">
                        <div className="flex items-center text-zinc-400 min-w-[140px] sm:min-w-[180px]">
                          <span className="text-xs sm:text-sm">
                            Max. Drawdown
                          </span>
                        </div>
                        <div className="mx-1 sm:mx-2 text-gray-300 w-3">:</div>
                        <div className="text-white font-semibold text-xs sm:text-sm">
                          6% ($300)
                        </div>
                      </div>

                      <div className="my-4 flex flex-row items-center text-sm mb-1 relative">
                        <div className="flex items-center text-zinc-400 min-w-[140px] sm:min-w-[180px]">
                          <span className="text-xs sm:text-sm">Leverage</span>
                        </div>
                        <div className="mx-1 sm:mx-2 text-gray-300 w-3">:</div>
                        <div className="text-white font-semibold text-xs sm:text-sm">
                          Up to 1:100
                        </div>
                      </div>

                      <div className="my-4 flex flex-row items-center text-sm mb-1 relative">
                        <div className="flex items-center text-zinc-400 min-w-[140px] sm:min-w-[180px]">
                          <span className="text-xs sm:text-sm">Platform</span>
                        </div>
                        <div className="mx-1 sm:mx-2 text-gray-300 w-3">:</div>
                        <div className="text-white font-semibold text-xs sm:text-sm">
                          MT5
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Purchase Section */}
                  <div className="bg-gradient-to-r rounded-tl-4xl from-primary to-primary p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                    <div className="ml-0 sm:ml-4 text-center sm:text-left">
                      <p className="text-xs sm:text-sm text-white/80">
                        Challenge Fee
                      </p>
                      <p className="text-xl sm:text-3xl font-bold text-white">
                        $70.00
                      </p>
                    </div>
                    <button className="bg-black z-10 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center font-semibold hover:bg-white hover:text-black transition-colors text-sm sm:text-base w-full sm:w-auto justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-plus mr-2 mb-0.5 sm:mr-2"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      Buy the Challenge
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <p className="text-center text-xs text-gray-500 mt-4 px-2 sm:px-0">
              Please click here for{" "}
              <a
                target="_blank"
                href="/trading-rules"
                className="underline hover:text-white"
              >
                Trading Rules
              </a>{" "}
              for detailed overview.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
