import React from "react";
import { StarIcon } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Amazing platform! The support team is incredible and the payouts are lightning fast. Made my first 10k in just 2 weeks. Highly recommend!",
      name: "Sarah M.",
      role: "Professional Trader",
    },
    {
      text: "Finally found a prop firm that actually delivers. Clear rules, fair evaluation, and they pay on time. This is exactly what I was looking for.",
      name: "Mike R.",
      role: "Retail Trader",
    },
    {
      text: "The best decision I made for my trading career. Their platform is intuitive and the community is supportive. Already on my second payout!",
      name: "Alex K.",
      role: "Day Trader",
    },
    {
      text: "Incredible experience so far. The evaluation process was smooth and the rules are straightforward. They really want traders to succeed.",
      name: "Emma L.",
      role: "Swing Trader",
    },
  ];

  return (
    <div className="flex items-center justify-center py-16 sm:py-20 sm:my-48 my-24">
      <div className="max-w-[2000px] mx-auto flex flex-col items-center justify-center relative overflow-hidden space-y-16">
        {/* Container with backdrop */}
        <div
          className="max-w-7xl mx-auto w-full items-center rounded-2xl px-4 py-16 backdrop-blur-sm border-2 bg-black/40 border-gray-500/10 justify-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          {/* Header */}
          <div
            className="z-10 flex flex-col items-center px-4 sm:px-0 w-full text-white"
            style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
          >
            <h2 className="text-2xl sm:text-5xl font-semibold text-center mb-5">
              Real traders got{" "}
              <span className="text-neutral-400">
                <br /> Real payout
              </span>
            </h2>
            <p className="text-neutral-300 sm:px-0 px-6 max-w-xl mx-auto text-sm sm:text-lg text-center mb-10">
              See what people are saying about Nupips.
            </p>
          </div>

          {/* Scrolling Testimonials */}
          <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
            <div
              className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
              style={{
                "--animation-direction": "reverse",
                "--animation-duration": "80s",
              }}
            >
              <ul className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll hover:[animation-play-state:paused]">
                {/* Duplicate testimonials for infinite scroll effect */}
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <li
                      key={index}
                      className="relative w-[350px] max-w-full shrink-0 rounded-2xl p-[2px] md:w-[400px]"
                      style={{
                        background:
                          "linear-gradient(to bottom, #B12424, #FF5B19)",
                      }}
                    >
                      <div className="bg-black rounded-2xl px-8 py-8 h-full flex flex-col justify-between">
                        <blockquote>
                          <div className="relative z-20 text-sm leading-[1.6] font-bold text-white">
                            {testimonial.text}
                          </div>
                        </blockquote>

                        <div className="relative z-20 mt-6 flex flex-col gap-2">
                          <span className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-[#FF5B19]">
                              {testimonial.name}
                            </span>
                            <span className="text-sm font-bold text-[#FF5B19]">
                              {testimonial.role}
                            </span>
                          </span>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
