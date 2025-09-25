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
            {/* First Circle */}
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
                    Advanced
                  </p>
                  <h3
                    className=" text-[30px] sm:text-5xl lg:text-6xl my-1 sm:my-2 md:my-3 text-white leading-tight"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    AI/ML
                  </h3>
                  <p
                    className="text-base sm:text-lg text-white"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    Algorithms
                  </p>
                </div>
              </div>
            </div>

            {/* Second Circle - Featured */}
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
                  24/7
                </p>
                <h3
                  className=" text-[30px] sm:text-5xl lg:text-6xl my-1 sm:my-2 md:my-3 text-white leading-tight"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
                >
                  Trading
                </h3>
                <p
                  className="text-base sm:text-lg text-white"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
                >
                  Automation
                </p>
              </div>
            </div>

            {/* Third Circle */}
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
                    Professional
                  </p>
                  <h3
                    className=" text-[30px] sm:text-5xl lg:text-6xl my-1 sm:my-2 md:my-3 text-white leading-tight"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    Grade
                  </h3>
                  <p
                    className="text-base sm:text-lg text-white"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "none",
                    }}
                  >
                    Solutions
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
            Advanced Algorithmic Trading Solutions
          </span>
          <br className="block" />
          <span>Professional-Grade Automation for Everyone.</span>
          <br />
        </p>

        {/* Sub Heading with About Content */}
        <p
          className="text-xl text-[#454545] md:text-3xl sm:text-5xl leading-[125%] mb-14"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          NUPIPS delivers <br />
          <span className="text-white">cutting-edge automation</span> solutions
          <br className="hidden sm:block" />
          tailored for traders and institutions.
        </p>

        {/* About Content Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed text-center">
            NUPIPS is a dedicated service brand operating under advanced
            algorithmic trading solutions, delivering professional-grade
            automation solutions tailored for individuals, institutions, and
            businesses across various sectors. Our primary focus is to reduce
            manual efforts, minimize errors, and enhance digital transformation
            using secure and scalable automation technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
