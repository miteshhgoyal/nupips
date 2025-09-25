import React from "react";

const AboutSection = () => {
  return (
    <div className="flex items-center justify-center py-16 sm:py-0 sm:pb-20 -mt-20">
      <div className="flex space-y-10 flex-col items-center justify-center text-center text-white px-4 sm:px-0 lg:px-0 pt-8 sm:pt-12">
        <div className="w-full max-w-4xl mx-auto mt-16 text-center space-y-8">
          <h2
            className="text-2xl sm:text-5xl font-semibold text-center mb-5 text-white "
            style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
          >
            Join the NUPIPS Revolution!!
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Don't let the unpredictable & volatile market conditions affect your
            trading performance & profitability. Take charge of your own trading
            destiny with NUPIPS, the innovative and dynamic platform that
            enables you to harness the power of algorithmic trading. With
            NUPIPS, you can make informed, data-driven & strategic decisions
            that will boost your trading results as well as confidence. Don't
            settle for less than you deserve. Upgrade your trading experience
            today & see the difference for yourself. Get started now...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
