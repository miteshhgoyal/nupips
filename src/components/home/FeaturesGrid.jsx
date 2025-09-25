import React from "react";
import {
  TrendingUp,
  Bot,
  Shield,
  Clock,
  BarChart3,
  Settings,
} from "lucide-react";

const FeaturesGrid = () => {
  const solutions = [
    {
      title: "Custom Algo Trading Bots",
      description:
        "Bots built specifically for your trading style, whether scalping, intraday, or swing. Tailored to work with your preferred broker and assets.",
      icon: Bot,
    },
    {
      title: "Ready-to-Use Strategies",
      description:
        "Pre-built bots designed for popular strategies like trend-following, mean reversion, arbitrage, and high-frequency scalping.",
      icon: TrendingUp,
    },
    {
      title: "Risk Management",
      description:
        "Automated SL, TP, trailing SL, and position sizing tools to manage and mitigate risks, safeguarding your investments.",
      icon: Shield,
    },
    {
      title: "Backtesting & Optimization",
      description:
        "Test your strategy across years of historical data. Optimize parameters for maximum profitability and reduced drawdown.",
      icon: BarChart3,
    },
    {
      title: "Real-time Execution",
      description:
        "Stay up to date with live market data and execute orders instantly, ensuring you make informed, timely decisions.",
      icon: Clock,
    },
    {
      title: "API & Platform Integration",
      description:
        "Full compatibility with MT4, MT5, TradingView, Zerodha, Angel One, Binance, Bybit, and other global platforms.",
      icon: Settings,
    },
  ];

  return (
    <section className="flex items-center justify-center py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            At Nupips, we provide a wide range of{" "}
            <strong className="text-white">algorithmic trading services</strong>
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-6 p-6 bg-black/30 rounded-lg border border-white/10 hover:border-primary/50 transition-colors"
              >
                <IconComponent className="w-16 h-16 text-primary" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {solution.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Performance Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Performance Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-black/30 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Gold Scalper Bot
              </h3>
              <p className="text-neutral-300 mb-4">
                Backtested over 3 years, delivering an{" "}
                <strong className="text-white">
                  average of 7–10% monthly returns
                </strong>{" "}
                with controlled risk.
              </p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Crypto Arbitrage Bot
              </h3>
              <p className="text-neutral-300 mb-4">
                Tested on Binance & Bybit, showing consistent{" "}
                <strong className="text-white">
                  low-risk profit margins of 2–4% monthly
                </strong>
                .
              </p>
            </div>
          </div>
          <p className="text-neutral-500 text-sm mt-6 italic">
            Disclaimer: Past performance does not guarantee future results. All
            investments carry risk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
