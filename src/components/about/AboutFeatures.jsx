import React from "react";

const AboutFeatures = () => {
  const features = [
    {
      title: "Advanced Forex Algorithms",
      description:
        "AI-powered trading systems trained on 20+ years of forex market data across all major currency pairs",
    },
    {
      title: "Zero-Code Trading Setup",
      description:
        "Deploy sophisticated forex strategies without programming knowledge - just configure and launch",
    },
    {
      title: "Multi-Timeframe Backtesting",
      description:
        "Test strategies across M1 to D1 timeframes with tick-level precision using historical forex data",
    },
    {
      title: "Live Market Analytics",
      description:
        "Real-time currency strength meters, volatility indicators, and sentiment analysis for optimal entries",
    },
  ];

  return (
    <div className="jsx-c24816384e5c8cd1 text-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="mb-12 sm:mb-20 text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          At NuPips <br className="jsx-c24816384e5c8cd1" />
          <span className="jsx-c24816384e5c8cd1 bg-gradient-to-r from-[#FF5B19] to-[#E63535] bg-clip-text text-transparent">
            we revolutionize forex trading
          </span>
        </h2>

        {/* Grid of Feature Cards */}
        <div
          className="relative mb-12 sm:mb-16 overflow-hidden"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="jsx-c24816384e5c8cd1 transition-all duration-700 ease-in-out cursor-pointer p-[1px] rounded-2xl shadow-2xl w-72 h-72 sm:w-80 sm:h-80 lg:w-72 lg:h-72 bg-gradient-to-br from-[#B1B1B1]/50 to-black hover:from-[#FF5B19] hover:via-[#E63535] hover:to-black"
                style={{
                  transformStyle: "flat",
                  filter: "brightness(1)",
                }}
              >
                <div className="jsx-c24816384e5c8cd1 rounded-2xl p-4 sm:p-6 text-left flex justify-end flex-col w-full h-full bg-gradient-to-br from-[#B1B1B1]/50 via-black to-black">
                  <h1 className="jsx-c24816384e5c8cd1 font-bold text-lg sm:text-xl text-[#FF5B19] mb-2 leading-tight">
                    {feature.title}
                  </h1>
                  <p className="jsx-c24816384e5c8cd1 font-hehe text-balance text-xs sm:text-sm leading-snug text-[#B1B1B1]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="-mt-4 sm:mt-0 max-w-4xl mx-auto px-6 sm:px-0">
        <div
          className="p-[1px] bg-gradient-to-br from-[#B1B1B1]/20 to-black rounded-2xl"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          <div
            style={{ backdropFilter: "blur(12px)" }}
            className="jsx-c24816384e5c8cd1 flex flex-col items-start p-4 sm:p-6 md:p-10 gap-4 sm:gap-6 md:gap-8 rounded-2xl h-full mobile-gradient"
          >
            <div className="jsx-c24816384e5c8cd1 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mx-auto w-full">
              <div className="jsx-c24816384e5c8cd1 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                <h2 className="jsx-c24816384e5c8cd1 text-2xl font-semibold mb-4">
                  Our <br className="jsx-c24816384e5c8cd1" />
                  <span className="jsx-c24816384e5c8cd1 text-orange-500">
                    Mission
                  </span>
                </h2>
                <p className="jsx-c24816384e5c8cd1 text-[#B1B1B1] font-hehe text-sm md:text-base">
                  To democratize professional-grade forex trading algorithms,
                  making institutional-level strategies accessible to retail
                  traders worldwide.
                  <br className="jsx-c24816384e5c8cd1" />
                  <br className="jsx-c24816384e5c8cd1" />
                  Every trader deserves access to cutting-edge technology.
                </p>
                <p className="jsx-c24816384e5c8cd1 text-[#B1B1B1] mt-2 font-hehe text-sm md:text-base">
                  With our platform,
                  <br className="jsx-c24816384e5c8cd1" />
                  we bridge that gap completely.
                </p>
              </div>
              <div className="jsx-c24816384e5c8cd1 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                <h2 className="jsx-c24816384e5c8cd1 text-2xl font-semibold mb-4">
                  Smart Risk Management{" "}
                  <span className="jsx-c24816384e5c8cd1 text-orange-500">
                    & 24/7 Support
                  </span>
                </h2>
                <p className="jsx-c24816384e5c8cd1 text-[#B1B1B1] font-hehe text-sm md:text-base">
                  Advanced position sizing, dynamic stop-losses, and correlation
                  filters protect your forex capital automatically.
                  <br className="jsx-c24816384e5c8cd1" />
                  Set maximum drawdown limits and risk per trade.
                  <br className="jsx-c24816384e5c8cd1" />
                </p>
                <p className="jsx-c24816384e5c8cd1 text-[#B1B1B1] mt-2 font-hehe text-sm md:text-base">
                  Our forex trading specialists provide round-the-clock support.
                  <br className="jsx-c24816384e5c8cd1" />
                  Ready to optimize your algorithmic performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
