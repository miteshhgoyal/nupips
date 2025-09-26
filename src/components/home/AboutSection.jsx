import React from "react";

const AboutSection = () => {
  return (
    <div className="flex items-center justify-center py-16 sm:py-20">
      <div className="flex space-y-10 flex-col items-center justify-center text-center -black px-4 sm:px-0 lg:px-0">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          <div className="text-left space-y-6 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed">
              At <strong className="-black">Nupips</strong>, we believe trading
              should be
              <strong className="text-primary">
                {" "}
                smarter, faster, and stress-free
              </strong>
              . Our mission is to empower traders and investors with{" "}
              <strong className="-black">
                cutting-edge algorithmic trading solutions
              </strong>{" "}
              that deliver performance without compromise.
            </p>

            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed">
              With a team of{" "}
              <strong className="-black">
                quantitative analysts, software developers, and experienced
                traders
              </strong>
              , we design bots that trade the markets with precision. Whether
              you are an
              <strong className="-black">
                {" "}
                individual trader, a prop firm, or a financial institution
              </strong>
              , Nupips provides tailored solutions to suit your needs.
            </p>

            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3 p-4 bg-white/30 rounded-lg border border-black/10">
                  <div>
                    <h4 className="font-semibold -black mb-2">Transparency</h4>
                    <p className="text-neutral-500">
                      Clear reports, no hidden logic.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white/30 rounded-lg border border-black/10">
                  <div>
                    <h4 className="font-semibold -black mb-2">Security</h4>
                    <p className="text-neutral-500">
                      Enterprise-grade encryption & secure hosting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white/30 rounded-lg border border-black/10">
                  <div>
                    <h4 className="font-semibold -black mb-2">Customization</h4>
                    <p className="text-neutral-500">
                      Strategies designed around your goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white/30 rounded-lg border border-black/10">
                  <div>
                    <h4 className="font-semibold -black mb-2">
                      Client-Centric
                    </h4>
                    <p className="text-neutral-500">
                      Full support from onboarding to live deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Take the next step towards smarter trading.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
