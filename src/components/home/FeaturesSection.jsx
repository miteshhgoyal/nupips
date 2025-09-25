import React from "react";

const FeaturesSection = () => {
  return (
    <div className="flex items-center justify-center py-16 sm:py-0 sm:pb-20 -mt-20">
      <div className="flex space-y-10 flex-col items-center justify-center text-center text-white px-4 sm:px-0 lg:px-0 pt-8 sm:pt-12">
        <div
          className="px-4 sm:px-0"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 xs:space-y-4 md:space-y-0 px-4 xs:px-6 sm:px-0">
            {/* First Circle - 24/7 Trading */}
            <div
              className="rounded-full p-[1px] md:mr-[-32px]"
              style={{
                background:
                  "linear-gradient(210.25deg, rgb(62, 62, 62) 12.7%, rgb(255, 53, 0) 48.47%, rgb(62, 62, 62) 81.58%)",
                opacity: 1,
                filter: "blur(0px)",
                transform: "perspective(1000px)",
              }}
            >
              <div className="bg-black rounded-full w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] h-[120px] xs:h-[140px] sm:h-[180px] md:h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-base sm:text-lg text-white"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    Trade 24/7
                  </p>
                  <h3
                    className=" text-[30px] sm:text-5xl lg:text-6xl my-1 sm:my-2 md:my-3 text-white leading-tight"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    Without
                  </h3>
                  <p
                    className="text-base sm:text-lg text-white"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    Emotions
                  </p>
                </div>
              </div>
            </div>

            {/* Second Circle - Featured - Backtested */}
            <div
              className="bg-primary rounded-full w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] h-[120px] xs:h-[140px] sm:h-[180px] md:h-[200px] flex items-center justify-center z-10 shadow-2xl shadow-primary/30"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "perspective(1000px)",
              }}
            >
              <div className="text-center">
                <p
                  className="text-base sm:text-lg text-white"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
                >
                  Proven &
                </p>
                <h3
                  className=" text-[30px] sm:text-5xl lg:text-6xl my-1 sm:my-2 md:my-3 text-white leading-tight"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
                >
                  Backtested
                </h3>
                <p
                  className="text-base sm:text-lg text-white"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
                >
                  Strategies
                </p>
              </div>
            </div>

            {/* Third Circle - Multi-Market */}
            <div
              className="rounded-full p-[1px] md:ml-[-32px]"
              style={{
                background:
                  "linear-gradient(210.25deg, rgb(62, 62, 62) 12.7%, rgb(255, 53, 0) 48.47%, rgb(62, 62, 62) 81.58%)",
                opacity: 1,
                filter: "blur(0px)",
                transform: "perspective(1000px)",
              }}
            >
              <div className="bg-black rounded-full w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] h-[120px] xs:h-[140px] sm:h-[180px] md:h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-base sm:text-lg text-white"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    Multi-Market
                  </p>
                  <h3
                    className=" text-[30px] sm:text-5xl lg:text-6xl my-1 sm:my-2 md:my-3 text-white leading-tight"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    Coverage
                  </h3>
                  <p
                    className="text-base sm:text-lg text-white"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    Forex, Crypto, Stocks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <p
          className="text-xl md:text-3xl sm:text-5xl leading-[125%] sm:mt-48 mt-24 mb-8"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          <span className="text-primary ">
            At Nupips, we believe trading should be
          </span>
          <br className="block" />
          <span>smarter, faster, and stress-free.</span>
          <br />
        </p>

        {/* Sub Heading with About Content */}
        <p
          className="text-xl text-[#454545] md:text-3xl sm:text-5xl leading-[125%] mb-14"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Our mission is to empower <br />
          <span className="text-white">traders and investors</span> with
          <br className="hidden sm:block" />
          cutting-edge algorithmic trading solutions.
        </p>

        {/* Key Benefits Grid */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold text-white">
                Fast & Reliable Execution
              </h4>
              <p className="text-neutral-400">
                Enter and exit trades in milliseconds with zero delays
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold text-white">
                Risk-Managed Trading
              </h4>
              <p className="text-neutral-400">
                Stop loss, trailing SL, and position sizing included
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold text-white">
                Real-Time Execution
              </h4>
              <p className="text-neutral-400">
                Bots react instantly to market changes
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold text-white">
                Cloud Hosting
              </h4>
              <p className="text-neutral-400">
                Trade without keeping your computer on
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold text-white">
                User Dashboard & Mobile Access
              </h4>
              <p className="text-neutral-400">
                Monitor your bots anytime, anywhere
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold text-white">
                24/7 Monitoring
              </h4>
              <p className="text-neutral-400">
                Continuous uptime for round-the-clock trading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
