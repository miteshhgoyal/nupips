import React from "react";

const HeroStatement = () => {
  return (
    <section className="text-white px-4 sm:px-0 py-10 sm:py-16 overflow-hidden relative flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2
          className="mb-10 text-3xl sm:text-5xl font-semibold leading-tight text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          When Algorithms Trade Smart,
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
          Cutting-edge algorithms rigorously tested.{" "}
          <br className="block sm:hidden" />
          Real-time data analyzed.
          <br />
          Then... intelligent execution.
        </p>

        <p
          className="mt-4 text-lg sm:text-xl text-[#B2B2B2] font-normal leading-relaxed text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          No emotions. No manual errors. No missed opportunities.
          <br />
          That's why we built NuPips <br className="block sm:hidden" /> -
          democratizing algo trading for everyone.
          <br />
          No complexity. No barriers.
        </p>

        <p
          className="mt-4 text-lg sm:text-xl text-[#B2B2B2] font-normal leading-relaxed text-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Just data-driven decisions and automated success.
        </p>
      </div>
    </section>
  );
};

export default HeroStatement;
