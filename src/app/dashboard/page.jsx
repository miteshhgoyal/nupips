import React from "react";

const page = () => {
  return (
    <div className="min-h-screen pt-40">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            {/* Main Message */}
            <div className="space-y-4">
              <div className="w-24 h-24 mx-auto bg-[#FF5B19]/10 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-[#FF5B19] rounded-full flex items-center justify-center"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                Dashboard Under Construction
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We're working hard to bring you the most advanced algorithmic
                trading dashboard. Your trading bots and analytics will be
                available here soon!
              </p>
            </div>

            {/* Feature Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/40 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-black mb-2">
                  Live Trading Bots
                </h3>
                <p className="text-sm text-gray-500">
                  Monitor your active algorithms in real-time
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-black mb-2">
                  Performance Analytics
                </h3>
                <p className="text-sm text-gray-500">
                  Detailed profit/loss reports and statistics
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-black mb-2">
                  Bot Configuration
                </h3>
                <p className="text-sm text-gray-500">
                  Customize your trading strategies and parameters
                </p>
              </div>
            </div>

            {/* Temporary Navigation */}
            <div className="flex justify-center mt-8">
              <a
                href="/"
                className="px-6 py-3 bg-[#FF5B19] text-white font-semibold rounded-lg hover:bg-[#E54A16] transition-all duration-200"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
