import React from "react";
import ShimmerButton from "./ShimmerButton";

const Hero = ({
  title = "Funding Fast. <br/> Answers Faster.",
  subtitle = "Questions about your account or the challenge? <br/>Just ask — we've got you.",
  button = { href: "", text: "Chat With Us" },
}) => {
  // Function to render text with line breaks
  const renderTextWithBreaks = (text) => {
    return text.split("<br/>").map((part, index, array) => (
      <React.Fragment key={index}>
        {part}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div>
      <div className="max-w-[2000px] flex flex-col justify-center items-center mx-auto px-4 sm:px-8 w-full relative overflow-hidden h-svh sm:h-screen">
        <div className="block -bottom-[150px] md:-bottom-[100px] lg:-bottom-[150px] z-1 absolute left-1/2 -translate-x-1/2 h-[150px] md:h-[200px] lg:h-[300px] w-[250px] md:w-[375px] lg:w-[500px] rounded-full bg-primary opacity-95 blur-[150px] transform-gpu"></div>

        <div className="pt-48 sm:pt-10 flex flex-col justify-center items-center w-full mx-auto relative z-10">
          <div
            className="text-center mb-20 sm:mb-16 relative z-10 max-w-4xl"
            style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-5 text-white">
              {renderTextWithBreaks(title)}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {renderTextWithBreaks(subtitle)}
            </p>
          </div>

          {/* Conditional rendering based on button text */}
          {button.text && (
            <div
              className="flex items-center justify-center"
              style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
            >
              <ShimmerButton
                href={button.href}
                variant="gradient"
                className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px"
              >
                {button.text}
              </ShimmerButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
