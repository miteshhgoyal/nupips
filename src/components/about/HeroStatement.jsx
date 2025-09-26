import React from "react";

const HeroStatement = () => {
  return (
    <section className="-black px-4 sm:px-0 py-10 sm:py-16 overflow-hidden relative flex items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2
          className="mb-10 text-3xl sm:text-5xl font-semibold leading-tight text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          When Forex Markets Never Sleep,
          <br className="block sm:hidden" /> Your Algorithms Should
          <br />
          <span className="bg-gradient-to-r from-[#FF5B19] to-[#E63535] bg-clip-text text-transparent">
            Trade Relentlessly.
          </span>
        </h2>

        <p
          className="mt-4 text-lg sm:text-xl text-neutral-500 font-normal leading-relaxed text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          AI-powered forex algorithms trained on millions of trades.{" "}
          <br className="block sm:hidden" />
          Market sentiment analyzed in milliseconds.
          <br />
          Then... precision execution across all currency pairs.
        </p>

        <p
          className="mt-4 text-lg sm:text-xl text-neutral-500 font-normal leading-relaxed text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          No FOMO. No revenge trading. No missed London or New York sessions.
          <br />
          That's why we built NuPips <br className="block sm:hidden" /> -
          bringing institutional-grade forex algorithms to retail traders.
          <br />
          No coding required. No barriers to entry.
        </p>

        <p
          className="mt-4 text-lg sm:text-xl text-neutral-500 font-normal leading-relaxed text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Just smart algorithms capturing pips while you sleep.
        </p>
      </div>
    </section>
  );
};

export default HeroStatement;
