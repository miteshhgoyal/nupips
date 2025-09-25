import React from "react";

const HeroStatement = () => {
  return (
    <section className="text-white px-4 sm:px-0 py-10 sm:py-16 overflow-hidden relative flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2
          className="mb-10 text-3xl sm:text-5xl font-semibold leading-tight text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          When You Trade Smart,
          <br className="block sm:hidden" /> You Should
          <br />
          <span className="bg-gradient-to-r from-[#FF5B19] to-[#E63535] bg-clip-text text-transparent">
            Profit Consistently.
          </span>
        </h2>

        <p
          className="mt-4 text-lg sm:text-xl text-[#B2B2B2] font-normal leading-relaxed text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Strategy tested. Algorithms optimized.{" "}
          <br className="block sm:hidden" />
          Signals generated.
          <br />
          Then... precision execution.
        </p>

        <p
          className="mt-4 text-lg sm:text-xl text-[#B2B2B2] font-normal leading-relaxed text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          No guesswork. No emotions. No manual errors.
          <br />
          That's why we built NuPips <br className="block sm:hidden" /> -
          advanced algo trading for professionals.
          <br />
          No complexity. No delays.
        </p>

        <p
          className="mt-4 text-lg sm:text-xl text-[#B2B2B2] font-normal leading-relaxed text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Just intelligent trading and automated profits.
        </p>
      </div>
    </section>
  );
};

export default HeroStatement;
