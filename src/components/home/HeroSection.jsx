import React from "react";
import { TrendingUp } from "lucide-react";
import ShimmerButton from "../ui/ShimmerButton";

const HeroSection = () => {
  return (
    <div className="relative max-w-full mx-auto overflow-hidden h-screen flex flex-col overflow-x-hidden">
      {/* Background iframe - exact match */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <iframe
          src="https://www.unicorn.studio/embed/jYxrWzSRtsXNqZADHnVH"
          title="Unicorn Studio Background"
          className="w-full h-full object-cover hidden sm:block"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          loading="eager"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      {/* Main content - exact structure match */}
      <main
        className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-0"
        style={{ pointerEvents: "none" }}
      >
        <div className="max-w-3xl flex flex-col items-center justify-center min-h-[40vh]">
          <div
            className="flex flex-col items-center w-full"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "none",
            }}
          >
            {/* First headline - exact match */}
            <h1 className="text-[30px] text-[#AFAFAF] sm:text-5xl lg:text-6xl leading-tight">
              Trusted by Pro Traders.
            </h1>

            {/* Second headline - exact match */}
            <h1 className="text-[30px] sm:text-5xl lg:text-6xl font-bold leading-tight -mt-2 sm:-mt-4 mb-4 text-white">
              Rated{" "}
              <span className="font-bold text-primary">#1 Algo Platform</span>{" "}
              for Forex.
            </h1>

            {/* Paragraph - exact match */}
            <p
              className="text-base sm:text-lg text-balance text-white max-w-xl mx-auto mb-3 leading-relaxed"
              style={{
                textShadow:
                  "3px 3px 6px rgba(0, 0, 0, 1), 0 0 12px rgba(0, 0, 0, 0.7), 1px 1px 0px rgba(0, 0, 0, 0.9)",
              }}
            >
              <span className="font-bold">24/7 automated trading.</span>
              <br /> Earn pips while you sleep. No emotions - just algorithms.
            </p>

            {/* Buttons container - exact match */}
            <div className="flex justify-center">
              <div className="flex gap-x-2">
                {/* ShimmerButton wrapper */}
                <div style={{ pointerEvents: "auto" }}>
                  <ShimmerButton
                    variant="gradient"
                    className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px"
                  >
                    <TrendingUp className="w-6 mr-2 h-6 text-white transition-colors duration-300" />
                    Start Trading Bot
                  </ShimmerButton>
                </div>

                {/* Talk To Us button wrapper */}
                <div style={{ pointerEvents: "auto" }}>
                  <button className="border border-white text-white px-6 py-3 rounded-[10px] bg-transparent hover:bg-white/10 transition-all duration-300 font-medium">
                    Talk To Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
